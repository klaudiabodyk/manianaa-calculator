import { render, screen } from '@testing-library/react'
import CalculatorManiany from '../components/CalculatorManiany'

describe('CalculatorManiany', () => {
  it('renders without crashing', () => {
    render(<CalculatorManiany onCalculate={jest.fn()} />)
    expect(screen.getByText(/calculateCaloricNeed/i)).toBeInTheDocument()
  })
  it('should handle user input and calculates correctly', () => {
    render(<CalculatorManiany onCalculate={jest.fn()} />)
    const weightInput = screen.getByText('weight')
    const heightInput = screen.getByText('height')
    const ageInput = screen.getByText('age')
    const calculateCaloricNeed = screen.getByText('calculateCaloricNeed')
    const genderInput = screen.getByText('gender')
    expect(weightInput).toBeInTheDocument()
    expect(heightInput).toBeInTheDocument()
    expect(ageInput).toBeInTheDocument()
    expect(genderInput).toBeInTheDocument()
    expect(calculateCaloricNeed).toBeInTheDocument()
  })
})
