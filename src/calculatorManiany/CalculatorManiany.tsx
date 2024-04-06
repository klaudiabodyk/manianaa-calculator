import React, {useEffect, useState} from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText, FormControlLabel, FormLabel, RadioGroup, Radio
} from '@mui/material';
import _ from "lodash";
import {ErrorType, FormState, GenderType, initialState, WorkType} from "./config";

interface CalculatorManianyProps {
    onCalculate: (result: number) => void;
}

const CalculatorManiany = ({ onCalculate }: CalculatorManianyProps) => {
    const [formState, setFormState] = useState<FormState>(initialState);
    const [errors, setErrors] = useState<string[]>([]);


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
    }, [formState]);

    const handleErrors = (formState: FormState, errors: any) => {
        let newErrors = _.cloneDeep(errors);
        if (!formState.gender) {
            newErrors.push(ErrorType.GENDER_ERROR);
        }
        if (!formState.weight || Number(formState.weight) < 1) {
            newErrors.push(ErrorType.WEIGHT_ERROR);
        }
        if (!formState.height || Number(formState.height) < 1) {
            newErrors.push(ErrorType.HEIGHT_ERROR);
        }
        if (!formState.age || Number(formState.age) < 1) {
            newErrors.push(ErrorType.AGE_ERROR);
        }
        if (!formState.workType) {
            newErrors.push(ErrorType.WORK_TYPE_ERROR);
        }
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
                multiplier = 1.2;
                break;
            case WorkType.SEDENTARY_1_2_WORKOUTS:
                multiplier = 1.3;
                break;
            case WorkType.SEDENTARY_3_4_WORKOUTS:
                multiplier = 1.4;
                break;
            case WorkType.PHYSICAL_WORK:
                multiplier = 1.5;
                break;
            case WorkType.PHYSICAL_WORK_3_4_WORKOUTS:
                multiplier = 1.6;
                break;
            default:
                break;
        }

        if (formState.weightReductionOption === 'reduce') {
            ppm -= 200;
        } else if (formState.weightReductionOption === 'calculate') {
            ppm += 200;
        }

        const result = ppm * multiplier;
        handleErrors(formState, errors);
        if (errors.length === 0) {
            onCalculate(result);
        }
    };

    return (
        <Container maxWidth="sm" sx={{ marginTop: '20px', backgroundColor: '#F8F9FD', borderRadius: '40px', padding: '25px 35px', border: '5px solid #fff', boxShadow: '0px 30px 30px -20px rgba(133, 189, 215, 0.8784313725)' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Wylicz swoje zapotrzebowanie kaloryczne, aby dobrać odpowiednią dla siebie kaloryczność.
            </Typography>
            <Box component="form" sx={{ marginTop: '20px' }}>
                <FormControl fullWidth variant="outlined" margin="normal" error={errors?.includes(ErrorType.GENDER_ERROR)}>
                    <InputLabel id="gender-label">Płeć</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender-select"
                        value={formState.gender}
                        onChange={(e) => setFormState(prevState => ({...prevState, gender: e.target.value}))}
                        label="Płeć"
                        required
                    >
                        <MenuItem value="women">Kobieta</MenuItem>
                        <MenuItem value="men">Mężczyzna</MenuItem>
                    </Select>
                    {errors?.includes(ErrorType.GENDER_ERROR) ? <FormHelperText>To pole jest wymagane</FormHelperText>: null}
                </FormControl>
                <TextField
                    type="number"
                    label="Waga na czczo (kg)"
                    value={formState.weight}
                    onChange={(e) => setFormState(prevState => ({...prevState, weight: e.target.value}))}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    error={errors?.includes(ErrorType.WEIGHT_ERROR)}
                    helperText={errors?.includes(ErrorType.WEIGHT_ERROR) ? "Waga musi być większa niż 0" : ""}
                />
                <TextField
                    type="number"
                    label="Wzrost (cm)"
                    value={formState.height}
                    onChange={(e) => setFormState(prevState => ({...prevState, height: e.target.value}))}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    error={errors?.includes(ErrorType.HEIGHT_ERROR)}
                    helperText={errors?.includes(ErrorType.HEIGHT_ERROR) ? "Wzrost musi być większy niż 0" : ""}
                />
                <TextField
                    type="number"
                    label="Wiek (w latach)"
                    value={formState.age}
                    onChange={(e) => setFormState(prevState => ({...prevState, age: e.target.value}))}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    error={errors?.includes(ErrorType.AGE_ERROR)}
                    helperText={errors?.includes(ErrorType.AGE_ERROR) ? "Wiek musi być większy niż 0" : ""}
                />
                <FormControl fullWidth variant="outlined" margin="normal" error={errors?.includes(ErrorType.WORK_TYPE_ERROR)}>
                    <InputLabel id="work-type-label">Aktywność</InputLabel>
                    <Select
                        labelId="work-type-label"
                        id="work-type-select"
                        value={formState.workType}
                        onChange={(e) => setFormState(prevState => ({...prevState, workType: e.target.value}))}
                        label="Aktywność"
                        required
                    >
                        <MenuItem value="Praca siedząca">Praca siedząca, niska aktywność</MenuItem>
                        <MenuItem value="Praca siedząca 1-2 treningi">Praca siedząca + 1-2 treningi</MenuItem>
                        <MenuItem value="Praca siedząca 3-4 treningi">Praca siedząca + 3-4 treningi</MenuItem>
                        <MenuItem value="Praca fizyczna">Praca fizyczna</MenuItem>
                        <MenuItem value="Praca fizyczna, 3-4 treningi">Praca fizyczna, 3-4 treningi</MenuItem>
                    </Select>
                    {errors?.includes(ErrorType.WORK_TYPE_ERROR) && <FormHelperText>To pole jest wymagane</FormHelperText>}
                </FormControl>
                <FormControl component="fieldset" margin="normal">
                    <RadioGroup
                        aria-label="weightReduction"
                        name="weightReduction"
                        value={formState.weightReductionOption}
                        onChange={(e) => setFormState(prevState => ({...prevState, weightReductionOption: e.target.value}))}
                    >
                        <FormControlLabel value="reduce" control={<Radio />} label="Chcę zredukować masę ciała" />
                        <FormControlLabel value="calculate" control={<Radio />} label="Przybranie na masie" />
                        <FormControlLabel value="maintain" control={<Radio />} label="Utrzymanie" />
                    </RadioGroup>
                </FormControl>

                <Button variant="contained" color="primary" onClick={calculatePpm} fullWidth sx={{ marginTop: '20px' }}>
                    Przelicz
                </Button>
            </Box>
        </Container>
    );
};

export default CalculatorManiany;
