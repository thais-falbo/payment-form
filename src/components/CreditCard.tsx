import React, { useState } from 'react'
import Input from './Input'

interface CardData {
  cardNumber: string
  cardHolder: string
  expiryDate: string
  cvv: string
}

const CreditCard: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardData((prev) => ({
      ...prev,
      [name as string]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div data-testid="credit-card" className="w-2/6">
      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="rounded-md bg-white p-5 shadow-md"
      >
        <Input
          type="text"
          name="cardNumber"
          label="Card Number"
          errorMsg="Invalid card number"
          placeholder="1234 5678 9123 4567"
          value={cardData.cardNumber}
          onChange={handleInputChange}
          maxLength={19}
          required
        />

        <Input
          type="text"
          name="cardHolder"
          label="Holder Name"
          errorMsg="Invalid name"
          placeholder="John Doe"
          value={cardData.cardHolder}
          onChange={handleInputChange}
          required
        />

        <Input
          type="number"
          name="expiryDate"
          label="Holder Name"
          errorMsg="Invalid date"
          placeholder="MM/YYYY"
          maxLength={7}
          value={cardData.expiryDate}
          onChange={handleInputChange}
          required
        />

        <Input
          type="number"
          name="cvv"
          label="Holder Name"
          errorMsg="Invalid CVV"
          placeholder="123"
          maxLength={3}
          value={cardData.cvv}
          onChange={handleInputChange}
          required
        />

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-2 font-bold text-white hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreditCard
