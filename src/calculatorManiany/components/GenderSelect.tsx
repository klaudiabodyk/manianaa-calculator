import React from 'react'
import {
  FormControl,      
  FormHelperText,
  Typography,
  Box,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'

interface GenderSelectProps {
  value: string
  onChange: (value: string) => void
  error: boolean
}

const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange, error }) => {
  const { t } = useTranslation()

  return (
    <FormControl fullWidth variant="outlined" margin="normal" error={error}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          variant="subtitle1"
          sx={{ color: error ? 'error.main' : 'text.primary', mr: 2 }}
        >
          {t('gender')}
        </Typography>
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={(e, newValue) => {
            if (newValue !== null) onChange(newValue)
          }}
          aria-label="gender"
          sx={{
            flex: 1,
            display: 'flex',
            gap: 2,
            '& .MuiToggleButton-root': {
              borderColor: '#ea4070',
              color: '#ea4070',
              fontWeight: 'bold',
              flex: 1,
            },
            '& .MuiToggleButton-root.Mui-selected': {
              backgroundColor: '#ea4070',
              color: 'white',
            },
            '& .MuiToggleButton-root:hover': {
              backgroundColor: '#f8d0e0',
            },
            '& .MuiToggleButton-root.Mui-selected:hover': {
              backgroundColor: '#d03060',
            },
          }}
        >
          <ToggleButton value="women">{t('women')}</ToggleButton>
          <ToggleButton value="men">{t('men')}</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {error && <FormHelperText>{t('requiredField')}</FormHelperText>}
    </FormControl>
  )
}

export default GenderSelect
