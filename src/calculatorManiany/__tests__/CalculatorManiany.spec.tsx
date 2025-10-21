import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CalculatorManiany from '../components/CalculatorManiany'

describe('CalculatorManiany', () => {
  it('renders without crashing', () => {
    render(<CalculatorManiany />)
    expect(screen.getByText(/Wylicz swoje zapotrzebowanie kaloryczne/i)).toBeInTheDocument()
  })

  it('should handle user input and calculates correctly', async () => {
    render(<CalculatorManiany />)

    // Select gender: woman
    await userEvent.click(screen.getByRole('button', { name: 'Kobieta' }))

    // Input weight: 50
    const weightInput = screen.getByLabelText('Waga na czczo (kg)')
    await userEvent.type(weightInput, '50')

    // Input height: 160
    const heightInput = screen.getByLabelText('Wzrost (cm)')
    await userEvent.type(heightInput, '160')

    // Input age: 30
    const ageInput = screen.getByLabelText('Wiek (w latach)')
    await userEvent.type(ageInput, '30')

    // Select work type: sedentary
    const workSelect = screen.getByLabelText('Aktywność')
    await userEvent.click(workSelect)
    await userEvent.click(screen.getByRole('option', { name: 'Praca siedząca, obowiązki domowe' }))

    // Select weight reduction: maintain
    await userEvent.click(screen.getByLabelText('Utrzymanie'))

    // Click calculate
    await userEvent.click(screen.getByRole('button', { name: 'Przelicz' }))

    // Expected calculation: PPM = 10*50 + 6.25*160 - 5*30 - 161 = 500 + 1000 - 150 - 161 = 1189
    // Multiplier 1.35: 1189 * 1.35 ≈ 1605.15, round to 1605
    expect(screen.getByText('1605 kcal')).toBeInTheDocument()
  })
})
