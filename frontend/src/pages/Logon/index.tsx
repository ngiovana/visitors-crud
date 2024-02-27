import { useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'

import { LoginForm, LogonContainer, ButtonContainer } from './styles'

export function Logon() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const navigate = useNavigate()

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value)
  }

  const handleLoginConfirm = () => {
    console.log(emailValue)
    console.log(passwordValue)
    if (emailValue.trim() !== '' && passwordValue.trim() !== '') {
      // verificar se o email existe, se a senha bate no banco de dados para então redirecionar
      if (passwordValue == "12345678") {
        navigate('/visitors')
      }
    }
  }

  return (
    <LogonContainer>
      <Header title="Autenticação"/>
      <LoginForm>
        <p>Login</p>
        <Input type="text" value={emailValue} title="E-mail" placeholder="cora_coralina@gmail.com" onChange={handleEmailChange}/>
        <Input type="text" value={passwordValue} title="Senha" placeholder="****************" onChange={handlePasswordChange}/>
        <ButtonContainer>
          <Button isImg={false} isCancel={false} isConfirm={true} onClick={handleLoginConfirm}/>
        </ButtonContainer>
      </LoginForm>
    </LogonContainer>
  )
}