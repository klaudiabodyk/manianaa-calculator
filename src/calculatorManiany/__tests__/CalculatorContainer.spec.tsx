import { render, screen } from '@testing-library/react'
import CalculatorContainer from '../container/CalculatorContainer'
import { MemoryRouter } from 'react-router-dom'

describe('Calculator Container', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <CalculatorContainer />
      </MemoryRouter>
    )
    expect(
      screen.getByText(
        'Wylicz swoje zapotrzebowanie kaloryczne, aby dobrać odpowiednią dla siebie kaloryczność.'
      )
    ).toBeInTheDocument()
  })
})
