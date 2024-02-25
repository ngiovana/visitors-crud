import { DefaultInput, InputTitle, InputContainer } from './styles'

interface InputProps {
  title: string;
  placeholder: string;
}

export function Input({title, placeholder}: InputProps) {
  const isCPF = title === "CPF"

  return (
    <InputContainer isCPF={isCPF}>
      <InputTitle>{title}</InputTitle>
      <DefaultInput placeholder={placeholder} />
    </InputContainer>
  )
}