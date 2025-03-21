import { FC } from 'react'
import CreditCard from './CreditCard'

const App: FC = () => {
  return (
    <div className="relative overflow-hidden bg-white" data-testid="app">
      <CreditCard />
    </div>
  )
}

export default App
