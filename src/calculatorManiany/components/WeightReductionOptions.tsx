import React from 'react'
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface WeightReductionOptionsProps {
  value: string
  onChange: (value: string) => void
}

const WeightReductionOptions: React.FC<WeightReductionOptionsProps> = ({ value, onChange }) => {
  const { t } = useTranslation()

  return (
    <FormControl component="fieldset" margin="normal">
      <RadioGroup
        aria-label="weightReduction"
        name="weightReduction"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <FormControlLabel
          value="reduce"
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={t('reduceBodyMass')}
        />
        <FormControlLabel
          value="overage"
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={t('calculateBodyMass')}
        />
        <FormControlLabel
          value="maintain"
          control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />}
          label={t('maintain')}
        />
      </RadioGroup>
    </FormControl>
  )
}

export default WeightReductionOptions
