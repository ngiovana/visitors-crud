import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { AddVisitorContainer, AddVisitorForm, ButtonContainer, FormTitle, ImgContainer, InputContainer } from './styles'

import { Avatar } from '@mui/material'

export function AddVisitor() {
  return(
    <AddVisitorContainer>
      <Header title="Visitante"/>
      <FormTitle>Dados Cadastrais</FormTitle>
      <AddVisitorForm>
        <InputContainer>
          <Input title="Nome" placeholder="Cora Coralina"/>
          <Input title="Celular" placeholder="(11) 98865-6789"/>
          <Input title="CPF" placeholder="507.689.980-77"/>
          <Input title="Email" placeholder="cora_coralina@gmail.com"/>
        </InputContainer>
        <ImgContainer>
          <Avatar src="/broken-image.jpg" sx={{width: 64, height: 64}}/>
          <Button isCancel={false} isConfirm={false} isImg /> 
        </ImgContainer>
      </AddVisitorForm>
      <ButtonContainer>
        <Button isImg={false} isConfirm={false} isCancel />
        <Button isImg={false} isCancel={false} isConfirm />
      </ButtonContainer>
    </AddVisitorContainer>
  )
}
