// @ts-nocheck

interface InputProps {
  label?: string
  LeftIcon?: React.ReactNode
  Icon?: React.ReactNode
  errorMessage?: string
}

export function Input({ label, Icon, LeftIcon, errorMessage }: InputProps) {
  return (
    <div>
      {LeftIcon}
      {label && <label>{label}</label>}
      <input type="text" />
      {Icon}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}