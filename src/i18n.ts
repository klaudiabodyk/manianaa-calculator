import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pl: {
    translation: {
      heroHeading: 'Kalkulator zapotrzebowania kalorycznego',
      heroIntro:
        'Sprawdź, ile kalorii jeść dziennie, żeby redukować, utrzymać wagę albo budować masę bez zgadywania.',
      gender: 'Płeć',
      women: 'Kobieta',
      men: 'Mężczyzna',
      weight: 'Waga na czczo (kg)',
      height: 'Wzrost (cm)',
      age: 'Wiek',
      activityLevel: 'Poziom aktywności',
      activityLow: 'Niska aktywność',
      activityLowDesc: 'praca siedząca, mało ruchu',
      activityModerate: 'Umiarkowana aktywność',
      activityModerateDesc: '2–3 treningi tygodniowo',
      activityHigh: 'Wysoka aktywność',
      activityHighDesc: '4+ treningi tygodniowo lub aktywna praca',
      goal: 'Cel',
      goalReduce: 'Redukcja masy ciała',
      goalMaintain: 'Utrzymanie masy ciała',
      goalGain: 'Budowanie masy',
      calculate: 'Oblicz moje kcal',
      yourResultToAchieveGoal: 'Twój wynik aby osiągnąć cel to:',
      yourResultIsTooLow:
        'Z uwagi na niską masę ciała i/lub niską aktywność fizyczną, Twoje zapotrzebowanie kaloryczne jest bardzo niskie, co może generować wyższe uczucie głodu i problemy z bilansowaniem diety. Zwiększ swoją aktywność w celu zwiększenia zapotrzebowania kalorycznego.',
      goToApp: 'Przejdź do aplikacji Maniany',
      calculateAgain: 'Oblicz ponownie',
      trustMessage:
        'To tylko punkt startowy. Najważniejsza jest obserwacja organizmu, nie perfekcyjne liczby.',
      validationWeight: 'Wpisz wagę w kilogramach.',
      validationHeight: 'Wpisz wzrost w centymetrach.',
      validationAge: 'Wpisz swój wiek.',
      validationActivity: 'Wybierz poziom aktywności.',
      validationGoal: 'Wybierz swój cel.',
      validationGender: 'Wybierz płeć.',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
