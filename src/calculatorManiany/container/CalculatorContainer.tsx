import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import CalculatorManiany from '../components/CalculatorManiany'
import EducationalContent from '../components/EducationalContent'
import '../styles/styles.css'

const CalculatorContainer: React.FC = () => {

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #fff5f8 0%, #ffffff 40%)',
      }}
    >
      <Container maxWidth="md" sx={{ pt: { xs: 4, sm: 6 }, pb: 4 }}>
        <Box
          component="header"
          sx={{ textAlign: 'center', mb: { xs: 4, sm: 5 }, px: { xs: 1, sm: 0 } }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: '"Libre Bodoni", serif',
              fontSize: { xs: '28px', sm: '36px', md: '42px' },
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Kalkulator zapotrzebowania kalorycznego
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#555',
              fontSize: { xs: '16px', sm: '18px' },
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Sprawdź, ile kalorii jeść dziennie, żeby redukować, utrzymać wagę albo budować masę bez
            zgadywania.
          </Typography>
        </Box>

        <CalculatorManiany />
      </Container>

      <EducationalContent />

      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          py: 4,
          borderTop: '1px solid #f0e0e8',
          mt: 4,
        }}
      >
        <Typography sx={{ color: '#999', fontSize: '13px' }}>
          © {new Date().getFullYear()} Manianaa. Kalkulator zapotrzebowania kalorycznego.
        </Typography>
      </Box>
    </Box>
  )
}

export default CalculatorContainer
