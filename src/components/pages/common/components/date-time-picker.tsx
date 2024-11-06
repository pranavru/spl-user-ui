import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from 'dayjs';

interface ComponentProps {
  disabled?: boolean;
  disablePast?: boolean;
  minDateTime?: Dayjs;
  maxDateTime?: Dayjs;
  label: string;
  value: string | null;
  onChange: (value: Dayjs | null) => void;
}

export const CustomDateTimePicker = (props: ComponentProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        disabled={props.disabled}
        disablePast={props.disablePast}
        format="YYYY/MM/DD HH:mm"
        timeSteps={{ hours: 3, minutes: 30 }}
        sx={{ width: '100%' }}
        label={props.label}
        value={props.value ? dayjs(props.value) : null}
        onChange={props.onChange}
      />
    </LocalizationProvider>
  )
}
