import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render the CreditCard', () => {
    render(<App />)

    expect(screen.getByTestId('credit-card')).toBeInTheDocument()
    expect(screen.getByTestId('app')).toBeInTheDocument()
  })
})
