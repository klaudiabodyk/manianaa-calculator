import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CalculatorManiany from '../components/CalculatorManiany'

describe('CalculatorManiany', () => {
  it('renders without crashing', () => {
    render(<CalculatorManiany />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should handle user input and calculate correctly', async () => {
    render(<CalculatorManiany />)

    await userEvent.click(screen.getByRole('button', { name: 'Kobieta' }))

    const weightInput = screen.getByLabelText(/Waga na czczo/i)
    await userEvent.type(weightInput, '50')

    const heightInput = screen.getByLabelText(/Wzrost/i)
    await userEvent.type(heightInput, '160')

    const ageInput = screen.getByLabelText(/Wiek/i)
    await userEvent.type(ageInput, '30')

    await userEvent.click(screen.getByRole('radio', { name: /Niska aktywność/i }))

    await userEvent.click(screen.getByRole('radio', { name: /Utrzymanie masy ciała/i }))

    await userEvent.click(screen.getByRole('button', { name: /Oblicz moje kcal/i }))

    // PPM = 10*50 + 6.25*160 - 5*30 - 161 = 500 + 1000 - 150 - 161 = 1189
    // Multiplier 1.4 (low): 1189 * 1.4 = 1664.6, round to 1665
    // Goal: maintain (no change)
    expect(screen.getByText('1665 kcal')).toBeInTheDocument()
  })

  it('should show validation errors when submitting empty form', async () => {
    render(<CalculatorManiany />)

    await userEvent.click(screen.getByRole('button', { name: /Oblicz moje kcal/i }))

    expect(screen.getByText('Wybierz płeć.')).toBeInTheDocument()
    expect(screen.getByText('Wpisz wagę w kilogramach.')).toBeInTheDocument()
    expect(screen.getByText('Wpisz wzrost w centymetrach.')).toBeInTheDocument()
    expect(screen.getByText('Wpisz swój wiek.')).toBeInTheDocument()
    expect(screen.getByText('Wybierz poziom aktywności.')).toBeInTheDocument()
    expect(screen.getByText('Wybierz swój cel.')).toBeInTheDocument()
  })
})
