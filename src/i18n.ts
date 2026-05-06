import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
const resources = {
  en: {
    translation: {
      finalScore: 'Twój wynik aby osiągnąć cel to: ',
      calculateAgain: 'Przelicz ponownie',
      calculateCaloricNeed:
        'Wylicz swoje zapotrzebowanie kaloryczne, aby dobrać odpowiednią dla siebie kaloryczność.',
      gender: 'Płeć',
      women: 'Kobieta',
      men: 'Mężczyzna',
      weight: 'Waga na czczo (kg)',
      height: 'Wzrost (cm)',
      age: 'Wiek (w latach)',
      activity: 'Aktywność',
      sedentary: 'Praca siedząca, obowiązki domowe',
      sedentaryWith12Workouts: 'Praca siedząca, 1-2 treningi',
      sedentaryWith34Workouts: 'Praca siedząca, 3-4 treningi',
      physicalWork: 'Praca fizyczna',
      physicalWorkWith34Workouts: 'Praca fizyczna, 3-4 treningi',
      reduceBodyMass: 'Chcę zredukować masę ciała',
      calculateBodyMass: 'Przybranie na masie',
      maintain: 'Utrzymanie',
      calculate: 'Przelicz',
      requiredField: 'To pole jest wymagane',
      weightMustBeGreaterThan0: 'Waga musi być większa niż 0',
      heightMustBeGreaterThan0: 'Wzrost musi być większy niż 0',
      ageMustBeGreaterThan0: 'Wiek musi być większy niż 0',
      activityRequired: 'Aktywność jest wymagana',
      buyEbook: 'KUP E-BOOK',
      goToApp: 'Przejdź do aplikacji Maniany',
      kcal: ' kcal',
      clickToCalculate: 'Kliknij przycisk "Przelicz" aby wyliczyć zapotrzebowanie',
      yourResultToAchieveGoal: 'Twój wynik aby osiągnąć cel to: ',
      yourResultIsTooLow:
        "Z uwagi na niską masę ciała i/lub niską aktywność fizyczną, Twoje zapotrzebowanie kaloryczne jest bardzo niskie, co może generować wyższe uczucie głodu i problemy z bilansowaniem diety. Zwiększ swoją aktywność w celu zwiększenia zapotrzebowania kalorycznego.",
    },
  },
}

i18n
  .use(initReactI18next) // If you're using React
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
