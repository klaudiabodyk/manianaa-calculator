import React from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from '@mui/material'
import { GoalType } from '../config'
import { useTranslation } from 'react-i18next'

interface GoalSelectProps {
  value: string
  onChange: (value: string) => void
  error: boolean
}

const GoalSelect: React.FC<GoalSelectProps> = ({ value, onChange, error }) => {
  const { t } = useTranslation()

  return (
    <FormControl
      component="fieldset"
      fullWidth
      error={error}
      sx={{ mt: 3 }}
      aria-describedby={error ? 'goal-error' : undefined}
    >
      <FormLabel
        component="legend"
        id="goal-label"
        sx={{
          fontWeight: 600,
          fontSize: '15px',
          color: error ? 'error.main' : '#333',
          mb: 1,
          '&.Mui-focused': { color: '#333' },
        }}
      >
        {t('goal')}
      </FormLabel>
      <RadioGroup
        aria-labelledby="goal-label"
        name="goal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <FormControlLabel
          value={GoalType.REDUCE}
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={t('goalReduce')}
          sx={{
            mb: 0.5,
            borderRadius: '8px',
            mx: 0,
            px: 1,
            '&:hover': { backgroundColor: '#fff5f8' },
          }}
        />
        <FormControlLabel
          value={GoalType.MAINTAIN}
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={t('goalMaintain')}
          sx={{
            mb: 0.5,
            borderRadius: '8px',
            mx: 0,
            px: 1,
            '&:hover': { backgroundColor: '#fff5f8' },
          }}
        />
        <FormControlLabel
          value={GoalType.GAIN}
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={t('goalGain')}
          sx={{
            mb: 0.5,
            borderRadius: '8px',
            mx: 0,
            px: 1,
            '&:hover': { backgroundColor: '#fff5f8' },
          }}
        />
      </RadioGroup>
      {error && <FormHelperText id="goal-error">{t('validationGoal')}</FormHelperText>}
    </FormControl>
  )
}

export default GoalSelect
