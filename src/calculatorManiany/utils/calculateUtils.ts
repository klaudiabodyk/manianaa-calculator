import { ActivityLevel, FormState, GenderType, GoalType } from '../config'

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
  switch (formState.activityLevel) {
    case ActivityLevel.LOW:
      multiplier = 1.4
      break
    case ActivityLevel.MODERATE:
      multiplier = 1.55
      break
    case ActivityLevel.HIGH:
      multiplier = 1.75
      break
    default:
      break
  }

  let result = ppm * multiplier

  switch (formState.goal) {
    case GoalType.REDUCE:
      result -= 300
      break
    case GoalType.GAIN:
      result += 300
      break
    case GoalType.MAINTAIN:
    default:
      break
  }

  return result
}
