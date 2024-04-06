import React, {useState} from "react";
import CalculatorManiany from "./CalculatorManiany";
import {Typography} from "@mui/material";

const CalculatorContainer = () => {
    const [result, setResult] = useState(0);
    return (
            <div>
                <CalculatorManiany onCalculate={(result) => setResult(result)} />
                <Typography variant="h2" align="center" gutterBottom >
                    Twój wynik aby osiągnąć cel to: {result} kcal.
                </Typography>
            </div>
    );
}

export default CalculatorContainer;
