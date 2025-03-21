import React, { useState } from 'react'

interface CreditCardProps {
  onSubmit?: (cardData: CardData) => void
}

interface CardData {
  cardNumber: string
  cardHolder: string
  expiryDate: string
  cvv: string
}

const CreditCard: React.FC<CreditCardProps> = ({ onSubmit }) => {
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
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(cardData)
    }
  }

  return (
    <div data-testid="credit-card">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            required
          />
        </div>

        <div>
          <label htmlFor="cardHolder">Card Holder</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={cardData.cardHolder}
            onChange={handleInputChange}
            placeholder="JOHN DOE"
            required
          />
        </div>

        <div>
          <div>
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={cardData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              maxLength={5}
              required
            />
          </div>

          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cardData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              maxLength={3}
              required
            />
          </div>
        </div>

        <button type="submit">Submit Payment</button>
      </form>
    </div>
  )
}

export default CreditCard
