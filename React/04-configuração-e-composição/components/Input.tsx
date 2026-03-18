// @ts-nocheck

interface RootProps {
  children: React.ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <div>
      {children}
    </div>
  )
}

interface LabelProps extends HTMLLabelElement {
  text: string
}

export function Label({ text, ...rest }: LabelProps) {
  return (
    <label htmlFor="" {...rest}>{text}</label>
  )
}

interface FormFieldProps extends HTMLInputElement {}

export function FormField({ ...rest }: FormFieldProps) {
  return (
    <input {...rest} />
  )
}

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <span>{message}</span>
  )
}

interface IconProps {
  children: React.ReactNode
}

export function Icon({ children }: IconProps) {
  return (
    <span>
      {children}
    </span>
  )
}