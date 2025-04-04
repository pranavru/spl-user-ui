import { Box, Typography, Checkbox, FormControlLabel, TextField, Button, Divider } from "@mui/material";
import ReusableTextField from "../../../../common/columns/column-text-field";
import { CustomDateTimePicker } from "../../../../common/components/date-time-picker";
import { Event } from "../../../types";
import { useAuth } from "../../../../../../auth/auth-provider";
import { useState } from "react";

interface ComponentProps {
  currentData: Event | null;
  updateEvent: (key: keyof Partial<Event>, value: string) => void;
  markAttendance: (eventId: string, userId: string, attended: boolean, ride?: string) => Promise<Event>;
}

export const EventDetails = ({ currentData, updateEvent, markAttendance }: ComponentProps) => {
  const { user } = useAuth();
  const [ride, setRide] = useState<string>("");
  
  const currentAttendance = currentData?.attendees?.find(a => a.userId === user?._id);
  
  const handleAttendanceChange = async (attended: boolean) => {
    if (currentData && user) {
      await markAttendance(currentData._id, user._id, attended, ride || undefined);
    }
  };
  return (
    <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column', mt: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Typography variant="h6">Event Details</Typography>
        <ReusableTextField
          required
          label="Event Title"
          error={currentData?.title?.length === 0}
          helperText="Event title is required"
          value={currentData?.title || ""}
          onChange={(e) => updateEvent("title", e.target.value)}
        />
        <ReusableTextField
          multiple
          label="Event Description"
          value={currentData?.description || ""}
          onChange={(e) => updateEvent("description", e.target.value)}
        />
        <ReusableTextField
          required
          error={currentData?.mandal?.length === 0}
          helperText="Mandal is required"
          label="Mandal"
          value={currentData?.mandal || ""}
          onChange={(e) => updateEvent("mandal", e.target.value)}
        />
        <CustomDateTimePicker
          disabled={currentData?.status === 'completed' || currentData?.status === 'ongoing'}
          disablePast={currentData?.status === 'upcoming'}
          label="Event Date"
          value={currentData?.date || null}
          onChange={(value) => {
            if (value) {
              updateEvent("date", new Date(value.toDate()).toISOString());
            }
          }}
        />
      </Box>

      <Divider />
      
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}>
        <Typography variant="h6">Attendance</Typography>
        
        {currentData && (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!currentAttendance?.attended}
                  onChange={(e) => handleAttendanceChange(e.target.checked)}
                  disabled={currentData.status === 'completed' || currentData.status === 'cancelled'}
                />
              }
              label="Mark as attended"
            />
            <TextField
              label="Ride Details (Optional)"
              value={ride}
              onChange={(e) => setRide(e.target.value)}
              disabled={!currentAttendance?.attended || currentData.status === 'completed' || currentData.status === 'cancelled'}
              size="small"
            />
            {currentAttendance?.attended && ride !== currentAttendance?.ride && (
              <Button 
                variant="contained" 
                size="small"
                onClick={() => handleAttendanceChange(true)}
                disabled={currentData.status === 'completed' || currentData.status === 'cancelled'}
              >
                Update Ride
              </Button>
            )}
          </Box>
        )}

        <Typography variant="body2" color="text.secondary">
          Total Attendees: {currentData?.attendees?.length || 0}
        </Typography>
      </Box>
    </Box>
  )
}
