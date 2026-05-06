import React from 'react'
import { TextField } from '@mui/material'

interface NumberInputProps {
  label: string
  value: string
  onChange: (value: string) => void
  error: boolean
  helperText: string
}

const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, error, helperText }) => {
  return (
    <TextField
      type="number"
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variant="outlined"
      fullWidth
      margin="normal"
      inputProps={{ min: '0' }}
      required
      error={error}
      helperText={error ? helperText : ''}
    />
  )
}

export default NumberInput
