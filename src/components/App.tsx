import { FC } from 'react'
import CreditCard from './CreditCard'

const App: FC = () => {
  return (
    <div
      className="flex h-lvh flex-col place-content-center items-center overflow-hidden bg-gray-100 font-sans"
      data-testid="app"
    >
      <CreditCard />
    </div>
  )
}

export default App
