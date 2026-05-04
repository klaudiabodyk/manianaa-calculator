import { render, screen } from '@testing-library/react'
import CalculatorContainer from '../container/CalculatorContainer'

describe('Calculator Container', () => {
  it('renders the page heading', () => {
    render(<CalculatorContainer />)
    expect(
      screen.getByRole('heading', { name: 'Kalkulator zapotrzebowania kalorycznego' })
    ).toBeInTheDocument()
  })

  it('renders the hero intro text', () => {
    render(<CalculatorContainer />)
    expect(
      screen.getByText(/Sprawdź, ile kalorii jeść dziennie/)
    ).toBeInTheDocument()
  })
})
