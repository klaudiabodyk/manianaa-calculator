import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const faqItems = [
  {
    question: 'Czy kalkulator kalorii jest dokładny?',
    answer:
      'Kalkulator daje przybliżoną wartość opartą na wzorze Mifflin-St Jeor. To dobry punkt wyjścia, ale każdy organizm jest inny. Obserwuj swoją wagę i samopoczucie i dostosowuj kaloryczność w miarę potrzeby.',
  },
  {
    question: 'Jak często przeliczać zapotrzebowanie kaloryczne?',
    answer:
      'Warto przeliczać co 4–6 tygodni lub po każdej istotnej zmianie wagi (więcej niż 2–3 kg), aktywności fizycznej lub stylu życia.',
  },
  {
    question: 'Czy mogę jeść mniej niż pokazuje kalkulator?',
    answer:
      'Jedzenie znacznie poniżej swojego zapotrzebowania może prowadzić do niedoborów, utraty masy mięśniowej i spowolnienia metabolizmu. Zamiast drastycznych obniżek, lepiej zastosować umiarkowany deficyt i obserwować efekty.',
  },
  {
    question: 'Co zrobić, jeśli waga nie spada?',
    answer:
      'Sprawdź, czy dokładnie liczysz kalorie i czy nie niedoszacowujesz porcji. Upewnij się, że śpisz wystarczająco i nie jesteś w okresie stresu. Jeśli stagnacja trwa dłużej niż 2–3 tygodnie, rozważ niewielkie obniżenie kalorii lub zwiększenie aktywności.',
  },
]

const EducationalContent: React.FC = () => {
  return (
    <Box
      component="article"
      sx={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: { xs: '32px 20px', sm: '48px 24px' },
      }}
    >
      <Box component="section" sx={{ mb: 5 }}>
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
          Jak działa kalkulator zapotrzebowania kalorycznego?
        </Typography>
        <Typography sx={{ color: '#444', lineHeight: 1.7, fontSize: '15px' }}>
          Kalkulator wykorzystuje wzór Mifflin-St Jeor, który na podstawie Twojej płci, wagi,
          wzrostu, wieku i poziomu aktywności fizycznej szacuje dzienne zapotrzebowanie kaloryczne.
          Następnie dostosowuje wynik do Twojego celu — redukcji, utrzymania lub budowania masy
          ciała. To jeden z najdokładniejszych wzorów stosowanych w dietetyce.
        </Typography>
      </Box>

      <Box component="section" sx={{ mb: 5 }}>
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
          Co oznacza zero kaloryczne?
        </Typography>
        <Typography sx={{ color: '#444', lineHeight: 1.7, fontSize: '15px' }}>
          &bdquo;Zero kaloryczne&rdquo; (czyli kalorie na utrzymanie) to przybliżona ilość energii,
          przy której Twoja waga pozostaje stabilna. Nie przybierasz ani nie tracisz. To Twój punkt
          odniesienia — zarówno gdy chcesz schudnąć (jedzenie poniżej zera), jak i gdy chcesz
          przybrać (jedzenie powyżej zera).
        </Typography>
      </Box>

      <Box component="section" sx={{ mb: 5 }}>
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
          Ile kalorii jeść na redukcji?
        </Typography>
        <Typography sx={{ color: '#444', lineHeight: 1.7, fontSize: '15px' }}>
          Redukcja zazwyczaj zaczyna się od umiarkowanego deficytu kalorycznego — około 200–400 kcal
          poniżej zapotrzebowania na utrzymanie. Zbyt drastyczne obniżenie kalorii może prowadzić
          do utraty mięśni, zmęczenia i efektu jo-jo. Kluczowe jest monitorowanie postępów i
          samopoczucia, a kaloryczność dostosowuj stopniowo.
        </Typography>
      </Box>

      <Box component="section" sx={{ mb: 5 }}>
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
          Ile kalorii jeść, żeby utrzymać masę ciała?
        </Typography>
        <Typography sx={{ color: '#444', lineHeight: 1.7, fontSize: '15px' }}>
          Utrzymanie to jedzenie na poziomie Twojego zapotrzebowania kalorycznego. To świetna
          strategia po okresie redukcji (aby ustabilizować metabolizm) lub przed rozpoczęciem nowego
          celu. Daje organizmowi czas na regenerację i pozwala lepiej poznać swoje potrzeby
          energetyczne.
        </Typography>
      </Box>

      <Box component="section" sx={{ mb: 5 }}>
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
          Ile kalorii jeść na masie?
        </Typography>
        <Typography sx={{ color: '#444', lineHeight: 1.7, fontSize: '15px' }}>
          Budowanie masy wymaga stopniowej nadwyżki kalorycznej — zazwyczaj około 200–400 kcal
          powyżej utrzymania. Ważne jest, aby nadwyżka nie była zbyt duża (żeby minimalizować
          przyrost tkanki tłuszczowej) i towarzyszyły jej regularne treningi siłowe. Monitoruj wagę
          i skład ciała co tydzień.
        </Typography>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          py: 3,
          px: 2,
          backgroundColor: '#fff5f8',
          borderRadius: '16px',
          mb: 5,
        }}
      >
        <Typography sx={{ color: '#555', fontSize: '15px', mb: 2 }}>
          Nie wiesz, co dalej? Sprawdź dietę w aplikacji Manianaa.
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
            fontWeight: 600,
            borderRadius: '10px',
            textTransform: 'none',
            padding: '12px 28px',
            '&:hover': { backgroundColor: '#d03060' },
          }}
        >
          Zobacz aplikację Manianaa
        </Button>
      </Box>

      <Box component="section" sx={{ mb: 5 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Libre Bodoni", serif',
            fontSize: { xs: '22px', sm: '26px' },
            fontWeight: 600,
            color: '#1a1a1a',
            mb: 3,
          }}
        >
          Najczęstsze pytania
        </Typography>
        {faqItems.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography
              variant="h3"
              sx={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', mb: 0.5 }}
            >
              {item.question}
            </Typography>
            <Typography sx={{ color: '#555', lineHeight: 1.7, fontSize: '14px' }}>
              {item.answer}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          py: 3,
          px: 2,
          backgroundColor: '#f8f5ff',
          borderRadius: '16px',
        }}
      >
        <Typography sx={{ color: '#555', fontSize: '15px', mb: 2 }}>
          Chcesz zacząć prościej? Zobacz e-booki Manianaa.
        </Typography>
        <Button
          component="a"
          href="https://manianaa.com/sklep/"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          sx={{
            color: '#ea4070',
            borderColor: '#ea4070',
            fontWeight: 600,
            borderRadius: '10px',
            textTransform: 'none',
            padding: '12px 28px',
            '&:hover': { backgroundColor: '#fff5f8', borderColor: '#d03060' },
          }}
        >
          Zobacz e-booki
        </Button>
      </Box>
    </Box>
  )
}

export default EducationalContent

export const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}
