import React, {useState} from "react";
import CalculatorManiany from "./CalculatorManiany";
import {Box, Button, Typography} from "@mui/material";
import i18n from '../i18n';
import './styles/styles.css';

const CalculatorContainer = () => {
    const [result, setResult] = useState(0);
    return (
            <div className="calculator-container">
                <CalculatorManiany onCalculate={(result) => setResult(result)} />
                <Typography align="center" gutterBottom padding={"30px"} sx={{
                    marginTop: '10px',
                    padding: '30px',
                    color: '#000000', // Ensure color is a string
                    fontFamily: '"Bodoni Moda", sans-serif', // Corrected font-family syntax
                    fontSize: '35px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    background: '#f8f9fd',
                    borderRadius: '15px',
                }}>
                    {i18n.t('finalScore')} {result} kcal.
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center', // Center vertically
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            marginTop: '20px',
                            backgroundColor: '#ea4070',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#d03060',
                            },
                        }}
                    >
                        Kup e-book
                    </Button>
                </Box>
            </div>
    );
}

export default CalculatorContainer;
