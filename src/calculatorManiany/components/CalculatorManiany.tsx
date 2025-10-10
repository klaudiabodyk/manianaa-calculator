import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormHelperText,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography
} from '@mui/material';
import _ from "lodash";
import {ErrorType, FormState, GenderType, initialState, WeightReductionOption, WorkType} from "../config";
import {useTranslation} from "react-i18next";
import '../styles/styles.css';


interface CalculatorManianyProps {
    onCalculate: (result: number) => void;
}
/**
 * A calculator component for calculating personalized caloric needs based on user input.
 * It includes form fields for gender, weight, height, age, work type, and weight reduction option.
 * The component validates the input and calculates the caloric need based on the provided data.
 */
const CalculatorManiany = ({ onCalculate }: CalculatorManianyProps) => {
    const { t } = useTranslation();
    const [formState, setFormState] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<string[]>([]);

/**
 * Updates the errors array based on the current form state.
 * Removes any errors that are no longer applicable due to changes in the form state.
 *
 * @param {FormState} formState - The current state of the form.
 * @param {any[]} errors - The current array of errors.
 * @param {string[]} keysToCheck - An array of keys to check in the form state.
 * @param {Function} setErrors - A function to update the errors state.
 */

    useEffect(() => {
        let newErrors = _.cloneDeep(errors);
        if (formState.gender) {
            newErrors = newErrors.filter(error => error !== ErrorType.GENDER_ERROR);
        }
        if (formState.weight) {
            newErrors = newErrors.filter(error => error !== ErrorType.WEIGHT_ERROR);
        }
        if (formState.height) {
            newErrors = newErrors.filter(error => error !== ErrorType.HEIGHT_ERROR);
        }
        if (formState.age) {
            newErrors = newErrors.filter(error => error !== ErrorType.AGE_ERROR);
        }
        if (formState.workType) {
            newErrors = newErrors.filter(error => error !== ErrorType.WORK_TYPE_ERROR);
        }
        setErrors(newErrors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formState]);

    const handleErrors = (formState: FormState, errors: any) => {
        let newErrors = _.cloneDeep(errors);

        const errorChecks = {
            gender: () => !formState.gender && ErrorType.GENDER_ERROR,
            weight: () => (!formState.weight || Number(formState.weight) < 1) && ErrorType.WEIGHT_ERROR,
            height: () => (!formState.height || Number(formState.height) < 1) && ErrorType.HEIGHT_ERROR,
            age: () => (!formState.age || Number(formState.age) < 1) && ErrorType.AGE_ERROR,
            workType: () => !formState.workType && ErrorType.WORK_TYPE_ERROR,
        };

        Object.values(errorChecks).forEach(check => {
            const error = check();
            if (error) {
                newErrors.push(error);
            }
        });

        setErrors(newErrors);
    };

    const calculatePpm = () => {
        const weightValue = formState.weight ? Number(formState.weight) : 0;
        const heightValue = formState.height ? Number(formState.height) : 0;
        const ageValue = formState.age ? Number(formState.age) : 0;
        let ppm = 0;
        if (formState.gender === GenderType.WOMEN) {
            ppm = (10 * weightValue) + (6.25 * heightValue) - (5 * ageValue) - 161;
        } else if (formState.gender === GenderType.MEN) {
            ppm = (10 * weightValue) + (6.25 * heightValue) - (5 * ageValue) + 5;
        }
        let multiplier = 1;
        switch (formState.workType) {
            case WorkType.SEDENTARY:
                multiplier = 1.35;
                break;
            case WorkType.SEDENTARY_1_2_WORKOUTS:
                multiplier = 1.4;
                break;
            case WorkType.SEDENTARY_3_4_WORKOUTS:
                multiplier = 1.5;
                break;
            case WorkType.PHYSICAL_WORK:
                multiplier = 1.6;
                break;
            case WorkType.PHYSICAL_WORK_3_4_WORKOUTS:
                multiplier = 1.8;
                break;
            default:
                break;
        }

        const result = ppm * multiplier;
        let clonedResult = _.cloneDeep(result)
        if (WeightReductionOption.REDUCE === formState.weightReductionOption) {
            clonedResult -= 300;
        } else if (WeightReductionOption.OVERAGE === formState.weightReductionOption) {
            clonedResult += 300;
        }
        handleErrors(formState, errors);
        if (errors.length === 0) {
            onCalculate(clonedResult);
        }
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: '20px', backgroundColor: '#F8F9FD', borderRadius: '40px', padding: '25px 35px', border: '5px solid #fff', boxShadow: '0px 30px 30px -20px rgba(133, 189, 215, 0.8784313725)' }}>
            <Typography variant="h4" align="center" gutterBottom sx={{
                padding: '20px',
                color: '#000000',
                fontFamily: '"Libre Bodoni", serif',
                fontSize: '34px',
                fontWeight: '400',
            }}>
                {t('calculateCaloricNeed')}
            </Typography>
            <Box component="form" sx={{ marginTop: '20px' }}>
                <FormControl fullWidth variant="outlined" margin="normal" error={errors?.includes(ErrorType.GENDER_ERROR)}>
                    <InputLabel id="gender-label">{t('gender')}</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender-select"
                        value={formState.gender}
                        onChange={(e) => setFormState(prevState => ({...prevState, gender: e.target.value}))}
                        label={t('gender')}
                        required
                    >
                        <MenuItem value="women">{t('women')}</MenuItem>
                        <MenuItem value="men">{t('men')}</MenuItem>
                    </Select>
                    {errors?.includes(ErrorType.GENDER_ERROR) ? <FormHelperText>{t('requiredField')}</FormHelperText>: null}
                </FormControl>
                <TextField
                    type="number"
                    label={t('weight')}
                    value={formState.weight}
                    onChange={(e) => setFormState(prevState => ({...prevState, weight: e.target.value}))}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    inputProps={{ min: "0" }}
                    required
                    error={errors?.includes(ErrorType.WEIGHT_ERROR)}
                    helperText={errors?.includes(ErrorType.WEIGHT_ERROR) ? t('weightMustBeGreaterThan0') : ""}
                />
                <TextField
                    type="number"
                    label={t('height')}
                    value={formState.height}
                    onChange={(e) => setFormState(prevState => ({...prevState, height: e.target.value}))}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    inputProps={{ min: "0" }}
                    required
                    error={errors?.includes(ErrorType.HEIGHT_ERROR)}
                    helperText={errors?.includes(ErrorType.HEIGHT_ERROR) ? t('heightMustBeGreaterThan0') : ""}
                />
                <TextField
                    type="number"
                    label={t('age')}
                    value={formState.age}
                    onChange={(e) => setFormState(prevState => ({...prevState, age: e.target.value}))}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    inputProps={{ min: "0" }}
                    required
                    error={errors?.includes(ErrorType.AGE_ERROR)}
                    helperText={errors?.includes(ErrorType.AGE_ERROR) ? t('ageMustBeGreaterThan0') : ""}
                />
                <FormControl fullWidth variant="outlined" margin="normal" error={errors?.includes(ErrorType.WORK_TYPE_ERROR)}>
                    <InputLabel id="work-type-label">{t('activity')}</InputLabel>
                    <Select
                        labelId="work-type-label"
                        id="work-type-select"
                        value={formState.workType}
                        onChange={(e) => setFormState(prevState => ({...prevState, workType: e.target.value}))}
                        label={t('activity')}
                        required
                    >
                        <MenuItem value={WorkType.SEDENTARY}>{t('sedentary')}</MenuItem>
                        <MenuItem value={WorkType.SEDENTARY_1_2_WORKOUTS}>{t('sedentaryWith12Workouts')}</MenuItem>
                        <MenuItem value={WorkType.SEDENTARY_3_4_WORKOUTS}>{t('sedentaryWith34Workouts')}</MenuItem>
                        <MenuItem value={WorkType.PHYSICAL_WORK}>{t('physicalWork')}</MenuItem>
                        <MenuItem value={WorkType.PHYSICAL_WORK_3_4_WORKOUTS}>{t('physicalWorkWith34Workouts')}</MenuItem>
                    </Select>
                    {errors?.includes(ErrorType.WORK_TYPE_ERROR) && <FormHelperText>{t('requiredField')}</FormHelperText>}
                </FormControl>
                <FormControl component="fieldset" margin="normal">
                    <RadioGroup
                        aria-label="weightReduction"
                        name="weightReduction"
                        value={formState.weightReductionOption}
                        onChange={(e) => setFormState(prevState => ({...prevState, weightReductionOption: e.target.value}))}
                    >
                        <FormControlLabel value="reduce" control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />} label={t('reduceBodyMass')} />
                        <FormControlLabel value="overage" control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />} label={t('calculateBodyMass')} />
                        <FormControlLabel value="maintain" control={<Radio sx={{ '&.Mui-checked': { color: '#ea4070' } }} />} label={t('maintain')} />
                    </RadioGroup>
                </FormControl>
                <p>Kliknij przycisk "Przelicz" aby wyliczyć zapotrzebowanie</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={calculatePpm}
                    fullWidth
                    sx={{
                        marginTop: '20px',
                        backgroundColor: '#ea4070',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#d03060',
                        },
                    }}
                >
                    {t('calculate')}
                </Button>
            </Box>
        </Container>
    );
};

export default CalculatorManiany;
