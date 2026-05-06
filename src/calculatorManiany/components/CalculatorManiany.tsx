import { useState } from 'react'
import { Box, Button, Typography, Alert } from '@mui/material'
import { ErrorType } from '../config'
import { useCalculatorForm } from '../hooks/useCalculatorForm'
import GenderSelect from './GenderSelect'
import ActivityLevelSelect from './ActivityLevelSelect'
import GoalSelect from './GoalSelect'
import NumberInput from './NumberInput'

const CalculatorManiany = () => {
  const [result, setResult] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const { formState, setFormState, errors, handleSubmit, resetForm, t } = useCalculatorForm(
    (res) => {
      setResult(Math.max(0, Math.round(res)))
      setShowResult(true)
    }
  )

  const handleReset = () => {
    resetForm()
    setShowResult(false)
    setResult(0)
  }

  if (showResult) {
    return (
      <Box
        component="section"
        aria-label="Wynik kalkulatora"
        sx={{
          backgroundColor: '#fff',
          borderRadius: '24px',
          padding: { xs: '32px 20px', sm: '48px 40px' },
          boxShadow: '0 8px 32px rgba(234, 64, 112, 0.1)',
          textAlign: 'center',
          maxWidth: '560px',
          margin: '0 auto',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Libre Bodoni", serif',
            fontSize: { xs: '20px', sm: '24px' },
            fontWeight: 500,
            color: '#333',
            mb: 1,
          }}
        >
          {t('yourResultToAchieveGoal')}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Libre Bodoni", serif',
            fontSize: { xs: '48px', sm: '64px' },
            fontWeight: 700,
            color: '#ea4070',
            mb: 2,
          }}
        >
          {result} kcal
        </Typography>

        {result <= 1500 && (
          <Alert
            severity="warning"
            sx={{
              mt: 2,
              mb: 3,
              backgroundColor: '#fff5f8',
              color: '#8b1a4a',
              borderRadius: '12px',
              border: '1px solid #f8d0e0',
              '& .MuiAlert-icon': { color: '#ea4070' },
              textAlign: 'left',
              fontSize: '14px',
              lineHeight: 1.6,
            }}
          >
            {t('yourResultIsTooLow')}
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
          <Button
            component="a"
            href="https://manianaa.com/produkt/dieta-maniany-w-aplikacji"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              backgroundColor: '#ea4070',
              color: '#fff',
              fontWeight: 600,
              fontSize: '16px',
              padding: '14px 32px',
              borderRadius: '12px',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#d03060' },
              '&:focus-visible': {
                outline: '3px solid #ea4070',
                outlineOffset: '2px',
              },
            }}
          >
            {t('goToApp')}
          </Button>
          <Button
            onClick={handleReset}
            variant="outlined"
            sx={{
              color: '#ea4070',
              borderColor: '#ea4070',
              fontWeight: 600,
              fontSize: '16px',
              padding: '14px 32px',
              borderRadius: '12px',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#fff5f8', borderColor: '#d03060' },
              '&:focus-visible': {
                outline: '3px solid #ea4070',
                outlineOffset: '2px',
              },
            }}
          >
            {t('calculateAgain')}
          </Button>
        </Box>
      </Box>
    )
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Kalkulator zapotrzebowania kalorycznego"
      sx={{
        backgroundColor: '#fff',
        borderRadius: '24px',
        padding: { xs: '32px 20px', sm: '48px 40px' },
        boxShadow: '0 8px 32px rgba(234, 64, 112, 0.1)',
        maxWidth: '560px',
        margin: '0 auto',
      }}
    >
      <GenderSelect
        value={formState.gender}
        onChange={(value) => setFormState((prev) => ({ ...prev, gender: value }))}
        error={errors.includes(ErrorType.GENDER_ERROR)}
      />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
          gap: 2,
          mt: 2,
        }}
      >
        <NumberInput
          id="weight-input"
          label={t('weight')}
          value={formState.weight}
          onChange={(value) => setFormState((prev) => ({ ...prev, weight: value }))}
          error={errors.includes(ErrorType.WEIGHT_ERROR)}
          helperText={t('validationWeight')}
        />
        <NumberInput
          id="height-input"
          label={t('height')}
          value={formState.height}
          onChange={(value) => setFormState((prev) => ({ ...prev, height: value }))}
          error={errors.includes(ErrorType.HEIGHT_ERROR)}
          helperText={t('validationHeight')}
        />
        <NumberInput
          id="age-input"
          label={t('age')}
          value={formState.age}
          onChange={(value) => setFormState((prev) => ({ ...prev, age: value }))}
          error={errors.includes(ErrorType.AGE_ERROR)}
          helperText={t('validationAge')}
        />
      </Box>

      <ActivityLevelSelect
        value={formState.activityLevel}
        onChange={(value) => setFormState((prev) => ({ ...prev, activityLevel: value }))}
        error={errors.includes(ErrorType.ACTIVITY_LEVEL_ERROR)}
      />

      <GoalSelect
        value={formState.goal}
        onChange={(value) => setFormState((prev) => ({ ...prev, goal: value }))}
        error={errors.includes(ErrorType.GOAL_ERROR)}
      />

      <Typography
        variant="body2"
        sx={{
          mt: 3,
          mb: 2,
          color: '#666',
          fontSize: '13px',
          textAlign: 'center',
          fontStyle: 'italic',
          lineHeight: 1.5,
        }}
      >
        {t('trustMessage')}
      </Typography>

      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{
          backgroundColor: '#ea4070',
          color: '#fff',
          fontWeight: 700,
          fontSize: '18px',
          padding: '16px 32px',
          borderRadius: '12px',
          textTransform: 'none',
          mt: 1,
          '&:hover': { backgroundColor: '#d03060' },
          '&:focus-visible': {
            outline: '3px solid #ea4070',
            outlineOffset: '2px',
          },
        }}
      >
        {t('calculate')}
      </Button>
    </Box>
  )
}

export default CalculatorManiany
