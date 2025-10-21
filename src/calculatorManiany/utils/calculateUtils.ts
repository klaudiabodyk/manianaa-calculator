import { FormState, GenderType, WeightReductionOption, WorkType } from '../config'

export const calculatePpmValue = (formState: FormState): number => {
  const weightValue = formState.weight ? Number(formState.weight) : 0
  const heightValue = formState.height ? Number(formState.height) : 0
  const ageValue = formState.age ? Number(formState.age) : 0
  let ppm = 0
  if (formState.gender === GenderType.WOMEN) {
    ppm = 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161
  } else if (formState.gender === GenderType.MEN) {
    ppm = 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5
  }
  let multiplier = 1
  switch (formState.workType) {
    case WorkType.SEDENTARY:
      multiplier = 1.35
      break
    case WorkType.SEDENTARY_1_2_WORKOUTS:
      multiplier = 1.4
      break
    case WorkType.SEDENTARY_3_4_WORKOUTS:
      multiplier = 1.5
      break
    case WorkType.PHYSICAL_WORK:
      multiplier = 1.6
      break
    case WorkType.PHYSICAL_WORK_3_4_WORKOUTS:
      multiplier = 1.8
      break
    default:
      break
  }

  let result = ppm * multiplier
  if (WeightReductionOption.REDUCE === formState.weightReductionOption) {
    result -= 300
  } else if (WeightReductionOption.OVERAGE === formState.weightReductionOption) {
    result += 300
  }
  return result
}
