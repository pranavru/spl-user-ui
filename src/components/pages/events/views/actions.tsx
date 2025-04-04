import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import { Box, IconButton, Tooltip } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Event } from '../types';
import { ConfirmModal } from '../../common/components/confirm-modal';
import { getTimeUsingISOString } from './edit-event/helpers';
import { useEvents } from '../data-provider';

interface ComponentProps {
  params: GridRenderCellParams<Event, any, any, GridTreeNodeWithRender>;
}

export const RowAction = (props: ComponentProps) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const { deleteEvent } = useEvents();

  const isActionsDisabled = getTimeUsingISOString(props.params.row.date) < getTimeUsingISOString(new Date().toISOString());

  return (
    <Box sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', gap: 1, height: '100%' }}>
      <Tooltip title="Edit Event">
        <Box component={'span'}>
          <IconButton 
            disabled={isActionsDisabled}
            onClick={() => navigate(`/edit-event/${props.params.row._id}`)}
            size='small'
            sx={{ color: 'secondary.main' }}

          >
            <Edit fontSize='inherit' />
          </IconButton>
        </Box>
      </Tooltip>
      <Tooltip title="Delete Event">
        <Box component={'span'}>
          <IconButton 
            disabled={isActionsDisabled}
            onClick={() => {
              setIsDeleteModalOpen(true);
            }}
            size='small'
            sx={{ color: 'secondary.main' }}
          >
            <Delete fontSize='inherit' />
          </IconButton>
        </Box>
      </Tooltip>

      <ConfirmModal
        open={isDeleteModalOpen}
        title="Delete Event"
        description="Are you sure you want to delete this event?"
        onConfirm={() => {
          setIsDeleteModalOpen(false);
          deleteEvent(props.params.row._id);
        }}
        onCancel={() => {
          setIsDeleteModalOpen(false);
        }}
      />
    </Box>
  )
}
