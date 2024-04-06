export interface FormState {
    gender: string;
    weight: string;
    height: string;
    age: string;
    workType: string;
    weightReductionOption: string;
}
export enum ErrorType {
    GENDER_ERROR = 'genderError',
    WEIGHT_ERROR = 'weightError',
    AGE_ERROR = 'ageError',
    HEIGHT_ERROR = 'heightError',
    WORK_TYPE_ERROR = 'workTypeError',
    RADIO_ERROR = 'radioError'
}

export const initialState: FormState = {
    gender: '',
    weight: '',
    height: '',
    age: '',
    workType: '',
    weightReductionOption: 'maintain',
}

export enum GenderType {
    WOMEN = 'women',
    MEN = 'men'
}

export enum WorkType {
    SEDENTARY = "Praca siedząca",
    SEDENTARY_1_2_WORKOUTS = "Praca siedząca 1-2 treningi",
    SEDENTARY_3_4_WORKOUTS = "Praca siedząca 3-4 treningi",
    PHYSICAL_WORK = "Praca fizyczna",
    PHYSICAL_WORK_3_4_WORKOUTS = "Praca fizyczna, 3-4 treningi"
}
