import React from 'react';
import TextField from '@mui/material/TextField';

interface ReusableTextFieldProps {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

const ReusableTextField: React.FC<ReusableTextFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  error = false,
  helperText = '',
}) => {
  return (
    <TextField
      size='small'
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
    />
  );
};

export default ReusableTextField;