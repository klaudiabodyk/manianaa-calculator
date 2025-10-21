import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Typography,
  Alert,
} from '@mui/material'
import {
  ErrorType,
} from '../config'
import '../styles/styles.css'
import { useCalculatorForm } from '../hooks/useCalculatorForm'
import GenderSelect from './GenderSelect'
import WorkTypeSelect from './WorkTypeSelect'
import WeightReductionOptions from './WeightReductionOptions'
import NumberInput from './NumberInput'
import ActionLinks from './ActionLinks'

/**
 * A calculator component for calculating personalized caloric needs based on user input.
 * It includes form fields for gender, weight, height, age, work type, and weight reduction option.
 * The component validates the input and calculates the caloric need based on the provided data.
 */
const CalculatorManiany = () => {
  const [result, setResult] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const { formState, setFormState, errors, handleSubmit, t } = useCalculatorForm((res) => {
    setResult(Math.max(0, Math.round(res)))
    setShowResult(true)
  })

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginTop: '10px',
        backgroundColor: '#F8F9FD',
        borderRadius: '40px',
        padding: '15px 15px 30px',
        border: '5px solid #fff',
        boxShadow: '0px 30px 30px -20px rgba(133, 189, 215, 0.8784313725)',
      }}
    >
      {showResult ? (
        <>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              padding: '2px',
              color: '#000000',
              fontFamily: '"Libre Bodoni", serif',
              fontSize: '34px',
              fontWeight: '500',
            }}
          >
            {t('yourResultToAchieveGoal')}
          </Typography>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              padding: '2px',
              color: '#000000',
              fontFamily: '"Libre Bodoni", serif',
              fontSize: '34px',
              fontWeight: '700',
            }}
          >
            {result} kcal
          </Typography>
          {result <= 1500 && (
            <Alert
              severity="warning"
              sx={{
                mt: 2,
                mb: 2,
                backgroundColor: '#FFFFFF',
                color: '#C71585',
                '& .MuiAlert-icon': {
                  color: '#FF69B4',
                },
              }}
            >
              {t('yourResultIsTooLow')}
            </Alert>
          )}
          <ActionLinks/>
        </>
      ) : (
        <>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              padding: '2px',
              color: '#000000',
              fontFamily: '"Libre Bodoni", serif',
              fontSize: '30px',
              fontWeight: '500',
            }}
          >
            {t('calculateCaloricNeed')}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: '10px' }}>
            <GenderSelect
              value={formState.gender}
              onChange={(value) => setFormState((prev) => ({ ...prev, gender: value }))}
              error={errors.includes(ErrorType.GENDER_ERROR)}
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <NumberInput
                  label={t('weight')}
                  value={formState.weight}
                  onChange={(value) => setFormState((prev) => ({ ...prev, weight: value }))}
                  error={errors.includes(ErrorType.WEIGHT_ERROR)}
                  helperText={t('weightMustBeGreaterThan0')}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <NumberInput
                  label={t('height')}
                  value={formState.height}
                  onChange={(value) => setFormState((prev) => ({ ...prev, height: value }))}
                  error={errors.includes(ErrorType.HEIGHT_ERROR)}
                  helperText={t('heightMustBeGreaterThan0')}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <NumberInput
                  label={t('age')}
                  value={formState.age}
                  onChange={(value) => setFormState((prev) => ({ ...prev, age: value }))}
                  error={errors.includes(ErrorType.AGE_ERROR)}
                  helperText={t('ageMustBeGreaterThan0')}
                />
              </Box>
            </Box>
            <WorkTypeSelect
              value={formState.workType}
              onChange={(value) => setFormState((prev) => ({ ...prev, workType: value }))}
              error={errors.includes(ErrorType.WORK_TYPE_ERROR)}
            />
            <WeightReductionOptions
              value={formState.weightReductionOption}
              onChange={(value) =>
                setFormState((prev) => ({ ...prev, weightReductionOption: value }))
              }
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                fontWeight: 'bold',
                marginTop: '10px',
                backgroundColor: '#ea4070',
                color: 'white',
                display: 'block',
                margin: '20px auto 0',
                '&:hover': {
                  backgroundColor: '#d03060',
                },
                padding: '20px 40px',
              }}
            >
              {t('calculate')}
            </Button>
          </Box>
        </>
      )}
    </Container>
  )
}

export default CalculatorManiany
