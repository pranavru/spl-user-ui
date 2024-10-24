import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import { User } from '../../types'
import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../../data-provider';
import { ConfirmModal } from '../../../common/components/confirm-modal';

interface ComponentProps {
  params: GridRenderCellParams<User, any, any, GridTreeNodeWithRender>;
}

export const ActionColumn = (props: ComponentProps) => {
  const navigate = useNavigate();
  const { deleteUser } = useContext(UserContext);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', gap: 1, height: '100%' }}>
      <Tooltip title="Edit User">
        <IconButton 
          onClick={() => navigate(`/edit-user/${props.params.row.id}`)}
          size='small'
          disabled={props.params.row.isNew}
          sx={{ color: 'secondary.main' }}

        >
          <Edit fontSize='inherit' />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete User">
        <IconButton 
          onClick={() => {
            setIsDeleteModalOpen(true);
          }}
          size='small'
          disabled={props.params.row.isNew}
          sx={{ color: 'secondary.main' }}
        >
          <Delete fontSize='inherit' />
        </IconButton>
      </Tooltip>

      <ConfirmModal
        open={isDeleteModalOpen}
        title="Delete User"
        description="Are you sure you want to delete this user?"
        onConfirm={() => {
          deleteUser(props.params.row.id);
          setIsDeleteModalOpen(false);
        }}
        onCancel={() => {
          setIsDeleteModalOpen(false);
        }}
      />
    </Box>
  )
}
