export interface FormState {
  gender: string
  weight: string
  height: string
  age: string
  activityLevel: string
  goal: string
}

export enum ErrorType {
  GENDER_ERROR = 'genderError',
  WEIGHT_ERROR = 'weightError',
  AGE_ERROR = 'ageError',
  HEIGHT_ERROR = 'heightError',
  ACTIVITY_LEVEL_ERROR = 'activityLevelError',
  GOAL_ERROR = 'goalError',
}

export const initialState: FormState = {
  gender: '',
  weight: '',
  height: '',
  age: '',
  activityLevel: '',
  goal: '',
}

export enum GenderType {
  WOMEN = 'women',
  MEN = 'men',
}

export enum ActivityLevel {
  LOW = 'low',
  MODERATE = 'moderate',
  HIGH = 'high',
}

export enum GoalType {
  REDUCE = 'reduce',
  MAINTAIN = 'maintain',
  GAIN = 'gain',
}

export const keysToCheck = ['gender', 'weight', 'height', 'age', 'activityLevel', 'goal']

export const ERROR = '_ERROR'
