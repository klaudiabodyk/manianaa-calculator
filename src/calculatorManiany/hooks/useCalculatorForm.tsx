import React, { useEffect, useState } from 'react'
import {
  ErrorType,
  FormState,
  initialState,
} from '../config'
import { useTranslation } from 'react-i18next'
import { calculatePpmValue } from '../utils/calculateUtils'
import _ from 'lodash';

export const useCalculatorForm = (onCalculate: (result: number) => void) => {
  const { t } = useTranslation()
  const [formState, setFormState] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    setErrors(prevErrors => {
      let newErrors = _.cloneDeep(prevErrors)
      if (formState.gender) {
        newErrors = newErrors.filter((error: string) => error !== ErrorType.GENDER_ERROR)
      }
      if (formState.weight) {
        newErrors = newErrors.filter((error: string) => error !== ErrorType.WEIGHT_ERROR)
      }
      if (formState.height) {
        newErrors = newErrors.filter((error: string) => error !== ErrorType.HEIGHT_ERROR)
      }
      if (formState.age) {
        newErrors = newErrors.filter((error: string) => error !== ErrorType.AGE_ERROR)
      }
      if (formState.workType) {
        newErrors = newErrors.filter((error: string) => error !== ErrorType.WORK_TYPE_ERROR)
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
    if (!currentFormState.workType) {
      nextErrors.push(ErrorType.WORK_TYPE_ERROR)
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
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    calculatePpm()
  }

  return { formState, setFormState, errors, handleSubmit, t }
}
