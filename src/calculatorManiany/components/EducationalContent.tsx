import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const EducationalContent: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: '560px',
        margin: '0 auto',
        padding: { xs: '32px 20px', sm: '48px 24px' },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 4, sm: 5 },
          px: { xs: 3, sm: 4 },
          backgroundColor: '#fff5f8',
          borderRadius: '24px',
          boxShadow: '0 4px 20px rgba(234, 64, 112, 0.08)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Libre Bodoni", serif',
            fontSize: { xs: '22px', sm: '26px' },
            fontWeight: 600,
            color: '#1a1a1a',
            mb: 2,
          }}
        >
          Nie wiesz, co dalej?
        </Typography>
        <Typography
          sx={{ color: '#555', fontSize: '15px', lineHeight: 1.7, mb: 1 }}
        >
          Masz już swoje zapotrzebowanie kaloryczne — teraz pora na plan działania.
        </Typography>
        <Typography
          sx={{ color: '#555', fontSize: '15px', lineHeight: 1.7, mb: 1 }}
        >
          W aplikacji Maniany znajdziesz gotowe jadłospisy dopasowane do Twojej kaloryczności,
          listę zakupów i proste przepisy na każdy dzień. Bez liczenia, bez zgadywania.
        </Typography>
        <Typography
          sx={{ color: '#555', fontSize: '15px', lineHeight: 1.7, mb: 3 }}
        >
          Dołącz do tysięcy kobiet, które już jedzą smacznie i zgodnie ze swoim celem.
        </Typography>
        <Button
          component="a"
          href="https://manianaa.com/produkt/dieta-maniany-w-aplikacji"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            backgroundColor: '#ea4070',
            color: '#fff',
            fontWeight: 700,
            fontSize: '16px',
            borderRadius: '12px',
            textTransform: 'none',
            padding: '14px 36px',
            '&:hover': { backgroundColor: '#d03060' },
            '&:focus-visible': {
              outline: '3px solid #ea4070',
              outlineOffset: '2px',
            },
          }}
        >
          Sprawdź dietę w aplikacji Manianaa
        </Button>
      </Box>
    </Box>
  )
}

export default EducationalContent
