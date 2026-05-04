import React from 'react'
import { TextField } from '@mui/material'

interface NumberInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error: boolean
  helperText: string
}

const NumberInput: React.FC<NumberInputProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  helperText,
}) => {
  const helperId = `${id}-helper`

  return (
    <TextField
      id={id}
      type="number"
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      fullWidth
      margin="normal"
      inputProps={{
        min: '1',
        'aria-describedby': error ? helperId : undefined,
      }}
      FormHelperTextProps={{ id: helperId }}
      required
      error={error}
      helperText={error ? helperText : ''}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ea4070',
          },
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#ea4070',
        },
      }}
    />
  )
}

export default NumberInput
