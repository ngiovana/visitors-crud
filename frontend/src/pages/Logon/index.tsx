import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { LoginForm, LogonContainer, ButtonContainer } from './styles'

export function Logon() {
  return (
    <LogonContainer>
      <Header title="Autenticação"/>
      <LoginForm>
        <p>Login</p>
        <Input title="E-mail" placeholder="cora_coralina@gmail.com"/>
        <Input title="Senha" placeholder="****************"/>
        <ButtonContainer>
          <Button isImg={false} isCancel={false} isConfirm/>
        </ButtonContainer>
      </LoginForm>
    </LogonContainer>
  )
}