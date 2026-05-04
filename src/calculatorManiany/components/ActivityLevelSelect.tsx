import React from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  Typography,
} from '@mui/material'
import { ActivityLevel } from '../config'
import { useTranslation } from 'react-i18next'

interface ActivityLevelSelectProps {
  value: string
  onChange: (value: string) => void
  error: boolean
}

const ActivityLevelSelect: React.FC<ActivityLevelSelectProps> = ({ value, onChange, error }) => {
  const { t } = useTranslation()

  return (
    <FormControl
      component="fieldset"
      fullWidth
      error={error}
      sx={{ mt: 3 }}
      aria-describedby={error ? 'activity-error' : undefined}
    >
      <FormLabel
        component="legend"
        id="activity-level-label"
        sx={{
          fontWeight: 600,
          fontSize: '15px',
          color: error ? 'error.main' : '#333',
          mb: 1,
          '&.Mui-focused': { color: '#333' },
        }}
      >
        {t('activityLevel')}
      </FormLabel>
      <RadioGroup
        aria-labelledby="activity-level-label"
        name="activityLevel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <FormControlLabel
          value={ActivityLevel.LOW}
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={
            <Typography component="span">
              <strong>{t('activityLow')}</strong>
              <Typography
                component="span"
                sx={{ color: '#666', fontSize: '13px', ml: 0.5 }}
              >
                — {t('activityLowDesc')}
              </Typography>
            </Typography>
          }
          sx={{
            mb: 0.5,
            borderRadius: '8px',
            mx: 0,
            px: 1,
            '&:hover': { backgroundColor: '#fff5f8' },
          }}
        />
        <FormControlLabel
          value={ActivityLevel.MODERATE}
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={
            <Typography component="span">
              <strong>{t('activityModerate')}</strong>
              <Typography
                component="span"
                sx={{ color: '#666', fontSize: '13px', ml: 0.5 }}
              >
                — {t('activityModerateDesc')}
              </Typography>
            </Typography>
          }
          sx={{
            mb: 0.5,
            borderRadius: '8px',
            mx: 0,
            px: 1,
            '&:hover': { backgroundColor: '#fff5f8' },
          }}
        />
        <FormControlLabel
          value={ActivityLevel.HIGH}
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={
            <Typography component="span">
              <strong>{t('activityHigh')}</strong>
              <Typography
                component="span"
                sx={{ color: '#666', fontSize: '13px', ml: 0.5 }}
              >
                — {t('activityHighDesc')}
              </Typography>
            </Typography>
          }
          sx={{
            mb: 0.5,
            borderRadius: '8px',
            mx: 0,
            px: 1,
            '&:hover': { backgroundColor: '#fff5f8' },
          }}
        />
      </RadioGroup>
      {error && <FormHelperText id="activity-error">{t('validationActivity')}</FormHelperText>}
    </FormControl>
  )
}

export default ActivityLevelSelect
