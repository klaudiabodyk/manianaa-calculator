import React from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material'
import { WorkType } from '../config'
import { useTranslation } from 'react-i18next'

interface WorkTypeSelectProps {
  value: string
  onChange: (value: string) => void
  error: boolean
}

const WorkTypeSelect: React.FC<WorkTypeSelectProps> = ({ value, onChange, error }) => {
  const { t } = useTranslation()

  return (
    <FormControl fullWidth variant="outlined" margin="normal" error={error}>
      <InputLabel id="work-type-label">{t('activity')}</InputLabel>
      <Select
        labelId="work-type-label"
        id="work-type-select"
        value={value}
        onChange={(e) => onChange(e.target.value as string)}
        label={t('activity')}
        required
      >
        <MenuItem value={WorkType.SEDENTARY}>{t('sedentary')}</MenuItem>
        <MenuItem value={WorkType.SEDENTARY_1_2_WORKOUTS}>{t('sedentaryWith12Workouts')}</MenuItem>
        <MenuItem value={WorkType.SEDENTARY_3_4_WORKOUTS}>{t('sedentaryWith34Workouts')}</MenuItem>
        <MenuItem value={WorkType.PHYSICAL_WORK}>{t('physicalWork')}</MenuItem>
        <MenuItem value={WorkType.PHYSICAL_WORK_3_4_WORKOUTS}>
          {t('physicalWorkWith34Workouts')}
        </MenuItem>
      </Select>
      {error && <FormHelperText>{t('requiredField')}</FormHelperText>}
    </FormControl>
  )
}

export default WorkTypeSelect
