import React, { useEffect, useState } from 'react'
import { ErrorType, FormState, initialState } from '../config'
import { useTranslation } from 'react-i18next'
import { calculatePpmValue } from '../utils/calculateUtils'

export const useCalculatorForm = (onCalculate: (result: number) => void) => {
  const { t } = useTranslation()
  const [formState, setFormState] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    setErrors((prevErrors) => {
      let newErrors = [...prevErrors]
      if (formState.gender) {
        newErrors = newErrors.filter((e) => e !== ErrorType.GENDER_ERROR)
      }
      if (formState.weight) {
        newErrors = newErrors.filter((e) => e !== ErrorType.WEIGHT_ERROR)
      }
      if (formState.height) {
        newErrors = newErrors.filter((e) => e !== ErrorType.HEIGHT_ERROR)
      }
      if (formState.age) {
        newErrors = newErrors.filter((e) => e !== ErrorType.AGE_ERROR)
      }
      if (formState.activityLevel) {
        newErrors = newErrors.filter((e) => e !== ErrorType.ACTIVITY_LEVEL_ERROR)
      }
      if (formState.goal) {
        newErrors = newErrors.filter((e) => e !== ErrorType.GOAL_ERROR)
      }
      return newErrors
    })
  }, [formState])

  const validateForm = (currentFormState: FormState): string[] => {
    const nextErrors: string[] = []
    if (!currentFormState.gender) {
      nextErrors.push(ErrorType.GENDER_ERROR)
    }
    if (!currentFormState.weight || Number(currentFormState.weight) < 1) {
      nextErrors.push(ErrorType.WEIGHT_ERROR)
    }
    if (!currentFormState.height || Number(currentFormState.height) < 1) {
      nextErrors.push(ErrorType.HEIGHT_ERROR)
    }
    if (!currentFormState.age || Number(currentFormState.age) < 1) {
      nextErrors.push(ErrorType.AGE_ERROR)
    }
    if (!currentFormState.activityLevel) {
      nextErrors.push(ErrorType.ACTIVITY_LEVEL_ERROR)
    }
    if (!currentFormState.goal) {
      nextErrors.push(ErrorType.GOAL_ERROR)
    }
    return nextErrors
  }

  const calculatePpm = () => {
    const validationErrors = validateForm(formState)
    setErrors(validationErrors)
    if (validationErrors.length > 0) {
      return
    }
    const result = calculatePpmValue(formState)
    onCalculate(result)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    calculatePpm()
  }

  const resetForm = () => {
    setFormState(initialState)
    setErrors([])
  }

  return { formState, setFormState, errors, handleSubmit, resetForm, t }
}
