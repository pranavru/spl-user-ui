import React from 'react';
import TextField from '@mui/material/TextField';
import { User } from '../../users/types';
import { Box, FormHelperText } from '@mui/material';

interface ReusableTextFieldProps {
  required?: boolean;
  label?: string;
  value: string | User | null | Date;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  multiple?: boolean;
}

const ReusableTextField: React.FC<ReusableTextFieldProps> = ({
  required,
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error = false,
  helperText = '',
  disabled = false,
  multiple = false,

}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", width: '100%' }}>
      <TextField
        required={required}
        disabled={disabled}
        size='small'
        fullWidth
        label={label}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        error={error}
        variant="outlined"
        multiline={multiple}
        rows={multiple ? 3 : 1}
      />
      <FormHelperText variant="standard" sx={{ fontSize: 'small', m: 0, color: 'GrayText' }}>{helperText}</FormHelperText>
    </Box>
  );
};

export default ReusableTextField;