import { DefaultInput, InputTitle, InputContainer } from './styles'

interface InputProps {
  title: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({title, value, placeholder, type, onChange}: InputProps) {
  const isCPF = title === "CPF"

  return (
    <InputContainer isCPF={isCPF}>
      <InputTitle>{title}</InputTitle>
      <DefaultInput type={type} value={value} placeholder={placeholder} onChange={onChange}/>
    </InputContainer>
  )
}