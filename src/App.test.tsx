import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the calculator heading', () => {
  render(<App />)
  const heading = screen.getByRole('heading', {
    level: 1,
    name: /kalkulator zapotrzebowania kalorycznego/i,
  })
  expect(heading).toBeInTheDocument()
})
