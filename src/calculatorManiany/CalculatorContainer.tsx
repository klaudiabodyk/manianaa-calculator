import React, {useState} from "react";
import CalculatorManiany from "./CalculatorManiany";
import {Typography} from "@mui/material";
import i18n from '../i18n';

const CalculatorContainer = () => {
    const [result, setResult] = useState(0);
    return (
            <div>
                <CalculatorManiany onCalculate={(result) => setResult(result)} />
                <Typography variant="h2" align="center" gutterBottom >
                    {i18n.t('finalScore')} {result} kcal.
                </Typography>
            </div>
    );
}

export default CalculatorContainer;
