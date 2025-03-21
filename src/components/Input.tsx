import { ChangeEventHandler, FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  errorMsg: string
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input: FC<InputProps> = ({
  name,
  label,
  errorMsg,
  onChange,
  ...props
}) => {
  return (
    <div className="mb-5 w-full">
      <label htmlFor={name} className="mb-2 block font-medium text-gray-900">
        {label}
      </label>
      <input
        {...props}
        id={name}
        name={name}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        onChange={(e) => onChange(e)}
      />
      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
        <span className="font-medium">{errorMsg}</span>
      </p>
    </div>
  )
}

export default Input
