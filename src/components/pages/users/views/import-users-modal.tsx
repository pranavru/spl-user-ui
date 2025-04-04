import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import { UserContext } from '../data-provider';
import { Users, User } from '../types';
import * as XLSX from 'xlsx';
import { addressFields } from '../literals';

interface ComponentProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const ImportUsersModal = (props: ComponentProps) => {
  const [users, setUsers] = useState<Users>([]);
  const { setImportedUsers } = React.useContext(UserContext);

  const handleClose = () => {
    props.setOpen(false);

    setImportedUsers(users);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
   
    if (!files) return;
    const file = files[0];
    const reader = new FileReader();
    
    reader.onload = (event) => {
      if (!event.target) return;

      const data = new Uint8Array(event.target.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData: (string)[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const headers = jsonData[0];
      const users = jsonData.slice(1)
        .map((row, rowIndex) => {
          const user: Partial<User> = {
            id: -1 - rowIndex,
          };
          
          headers.forEach((header, index) => {
            if (header === 'dateOfBirth' && row[index]) {
              user[header] = new Date(row[index]).toISOString();

              return;
            }

            if (addressFields.includes(header)) {
              if (!user.address) {
                user['address'] = {} as User['address'];
              }

              user.address[header as keyof User['address']] = row[index] || '';

              return;
            }

            user[header] = row[index];
          });

          return {
            ...user,
            mandal: null,
            role: null,
            referenceContacts: null,
            updatedAt: new Date(),
            createdAt: new Date(),
            isNew: true,
          };
        })
        .filter((user) => user.email);

      setUsers(users as unknown as Users);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Import Users</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="file"
            type="file"
            fullWidth
            variant='outlined'
            onChange={handleFileUpload}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {'Cancel'}
          </Button>
          <Button onClick={handleClose} color="primary">
            {'Import'}
          </Button>
        </DialogActions>
      </Dialog>
  )
}
