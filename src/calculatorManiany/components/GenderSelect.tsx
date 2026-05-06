import React from 'react'
import { FormControl, FormHelperText, Typography } from '@mui/material'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface GenderSelectProps {
  value: string
  onChange: (value: string) => void
  error: boolean
}

const GenderSelect: React.FC<GenderSelectProps> = ({ value, onChange, error }) => {
  const { t } = useTranslation()

  return (
    <FormControl
      fullWidth
      error={error}
      aria-describedby={error ? 'gender-error' : undefined}
    >
      <Typography
        component="label"
        id="gender-label"
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          fontSize: '15px',
          color: error ? 'error.main' : '#333',
          mb: 1,
          display: 'block',
        }}
      >
        {t('gender')}
      </Typography>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(_, newValue) => {
          if (newValue !== null) onChange(newValue)
        }}
        aria-labelledby="gender-label"
        sx={{
          width: '100%',
          display: 'flex',
          gap: 1.5,
          '& .MuiToggleButton-root': {
            border: '2px solid #f0d0e0',
            color: '#ea4070',
            fontWeight: 600,
            fontSize: '15px',
            flex: 1,
            borderRadius: '10px !important',
            padding: '12px 24px',
            textTransform: 'none',
            transition: 'all 0.2s ease',
          },
          '& .MuiToggleButton-root.Mui-selected': {
            backgroundColor: '#ea4070',
            color: '#fff',
            borderColor: '#ea4070',
            boxShadow: '0 4px 12px rgba(234, 64, 112, 0.3)',
          },
          '& .MuiToggleButton-root:hover': {
            backgroundColor: '#fff5f8',
            borderColor: '#ea4070',
          },
          '& .MuiToggleButton-root.Mui-selected:hover': {
            backgroundColor: '#d03060',
          },
          '& .MuiToggleButton-root:focus-visible': {
            outline: '3px solid #ea4070',
            outlineOffset: '2px',
          },
        }}
      >
        <ToggleButton value="women" aria-label="Kobieta">
          {t('women')}
        </ToggleButton>
        <ToggleButton value="men" aria-label="Mężczyzna">
          {t('men')}
        </ToggleButton>
      </ToggleButtonGroup>
      {error && (
        <FormHelperText id="gender-error" sx={{ mt: 1 }}>
          {t('validationGender')}
        </FormHelperText>
      )}
    </FormControl>
  )
}

export default GenderSelect
