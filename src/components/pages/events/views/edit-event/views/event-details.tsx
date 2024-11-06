import { Box } from "@mui/material";
import dayjs from "dayjs";
import ReusableTextField from "../../../../common/columns/column-text-field";
import { CustomDateTimePicker } from "../../../../common/components/date-time-picker";
import { Event } from "../../../types";

interface ComponentProps {
  currentData: Event | null;
  updateEvent: (key: keyof Partial<Event>, value: string) => void;
}

export const EventDetails = ({ currentData, updateEvent }: ComponentProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', mt: 2 }}>
      <ReusableTextField
        required
        label="Event Name"
        error={currentData?.name?.length === 0}
        helperText="Event name is required"
        value={currentData?.name || ""}
        onChange={(e) => updateEvent("name", e.target.value)}
      />
      <ReusableTextField
        multiple
        label="Event Description"
        value={currentData?.description || ""}
        onChange={(e) => updateEvent("description", e.target.value)}
      />
      <ReusableTextField
        required
        error={currentData?.location?.length === 0}
        helperText="Location is required"
        label="Location"
        value={currentData?.location || ""}
        onChange={(e) => updateEvent("location", e.target.value)}
      />
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row' }}>
        <CustomDateTimePicker
          disabled={currentData?.status === 'completed' || currentData?.status === 'active'}
          disablePast={currentData?.status === 'upcoming'}
          label="Start Date"
          value={currentData?.startDate || null}
          onChange={(value) => {
            if (value) {
              updateEvent("startDate", new Date(value.toDate()).toISOString());
            }
          }}
        />
        <CustomDateTimePicker
          disabled={currentData?.status === 'completed' || currentData?.status === 'active' || !currentData?.startDate}
          disablePast={currentData?.status === 'upcoming'}
          minDateTime={currentData?.startDate ? dayjs(currentData.startDate) : undefined}
          maxDateTime={currentData?.startDate ? dayjs(currentData.startDate).add(3, 'month') : undefined}
          label="End Date"
          value={currentData?.endDate || null}
          onChange={(value) => {
            if (value) {
              updateEvent("endDate", new Date(value.toDate()).toISOString());
            }
          }}
        />
      </Box>
    </Box>
  )
}
