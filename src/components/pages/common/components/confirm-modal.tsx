import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = (props) => {
  const { open, title, description, onConfirm, onCancel } = props;
  
  return (
    <Modal open={open} onClose={onCancel}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onCancel} sx={{ mr: 2 }}>
            {'Cancel'}
          </Button>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            {'Confirm'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
