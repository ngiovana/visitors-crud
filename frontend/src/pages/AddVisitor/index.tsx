import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { AddVisitorContainer, AddVisitorForm, ButtonContainer, FormTitle, ImgContainer, InputContainer } from './styles'

import { createVisitor, updateVisitor } from '../../services/visitorService'

import { Avatar } from '@mui/material'
import { useState } from 'react'

interface AddVisitorProps {
  edit: boolean;
}

export function AddVisitor({ edit }: AddVisitorProps) {

  const [nameValue, setNameValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [cpfValue, setCpfValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  const [actualId, setActualId] = useState(0)

  const handleConfirm = () => {
    if (nameValue.trim() !== "" && phoneValue.trim() !== "" && cpfValue.trim() !== "" && emailValue.trim() !== "" && actualId === 0) {
      createVisitor({name: nameValue, phone: phoneValue, cpf: cpfValue, email: emailValue})
    } else if (nameValue.trim() !== "" && phoneValue.trim() !== "" && cpfValue.trim() !== "" && emailValue.trim() !== "") {
       updateVisitor({name: nameValue, phone: phoneValue, cpf: cpfValue, email: emailValue}, actualId)
    }

    setNameValue('')
    setPhoneValue('')
    setCpfValue('')
    setEmailValue('')
  }

  const handleCancel = () => {
    setNameValue('')
    setPhoneValue('')
    setCpfValue('')
    setEmailValue('')

    //redirecionar pra lista de visitantes
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value)
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneValue(event.target.value)
  }

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpfValue(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value)
  }

  return(
    <AddVisitorContainer>
      <Header title="Visitante"/>
      <FormTitle>Dados Cadastrais</FormTitle>
      <AddVisitorForm>
        <InputContainer>
          <Input type="text" value={nameValue} title="Nome" placeholder="Cora Coralina" onChange={handleNameChange} />
          <Input type="text" value={phoneValue} title="Celular" placeholder="(11) 98865-6789" onChange={handlePhoneChange} />
          <Input type="text" value={cpfValue} title="CPF" placeholder="507.689.980-77" onChange={handleCpfChange} />
          <Input type="text" value={emailValue} title="Email" placeholder="cora_coralina@gmail.com" onChange={handleEmailChange} />
        </InputContainer>
        <ImgContainer>
          <Avatar src="/broken-image.jpg" sx={{width: 64, height: 64}}/>
          <Button isCancel={false} isConfirm={false} isImg={true} onClick={() => handleConfirm}/> 
        </ImgContainer>
      </AddVisitorForm>
      <ButtonContainer>
        <Button isImg={false} isConfirm={false} isCancel={true} onClick={handleCancel}/>
        <Button isImg={false} isCancel={false} isConfirm={true} onClick={handleConfirm}/>
      </ButtonContainer>
    </AddVisitorContainer>
  )
}
