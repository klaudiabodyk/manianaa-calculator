import React, {useState} from "react";
import CalculatorManiany from "../components/CalculatorManiany";
import {Box, Typography} from "@mui/material";
import i18n from '../../i18n';
import '../styles/styles.css';
import {Link} from "react-router-dom";

const CalculatorContainer = () => {
    const [result, setResult] = useState(0);

    return (
            <div className="calculator-container">
                <CalculatorManiany onCalculate={(result) => setResult(result)} />
                <Typography align="center" gutterBottom padding={"30px"} sx={{
                    marginTop: '10px',
                    padding: '30px',
                    color: '#000000',
                    fontFamily: '"Libre Bodoni", serif',
                    fontOpticalSizing: 'auto',
                    fontWeight: '700',
                    fontStyle: 'normal',
                    fontSize: '30px',
                    textTransform: 'uppercase',
                    background: '#f8f9fd',
                    borderRadius: '15px',
                }}>
                    {i18n.t('finalScore')} {result} {i18n.t('kcal')}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Link
                        className={'ebook-button'}
                        dataTest-id={'ebook-button'}
                        to={'https://manianaa.com/produkt/tym-razem-sie-uda'}
                    >
                        {i18n.t('buyEbook')}
                    </Link>
                </Box>
            </div>
    );
}

export default CalculatorContainer;
