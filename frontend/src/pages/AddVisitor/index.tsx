import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { AddVisitorContainer, AddVisitorForm, ButtonContainer, FormTitle, ImgContainer, InputContainer } from './styles'

import { createVisitor, updateVisitor, getVisitorById } from '../../services/visitorService'

import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface AddVisitorProps {
  edit: boolean;
}

export function AddVisitor({ edit }: AddVisitorProps) {
  const { id } = useParams()

  const [visitor, setVisitor] = useState({})
  const [nameValue, setNameValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [cpfValue, setCpfValue] = useState('')
  const [emailValue, setEmailValue] = useState('')

  if (id !== '' && id !== undefined) {
    useEffect( () => { 
      async function fetchData() {
        try {
          const data = await getVisitorById(Number(id))
          setVisitor(data)
          console.log("entrou na função")
        } catch (err) {
          console.log(err);
        }
      }
      fetchData() 
      setNameValue(visitor.name)
      setPhoneValue(visitor.phone)
      setCpfValue(visitor.cpf)
      setEmailValue(visitor.email)
    }, []);
  }

  const navigate = useNavigate()

  const handleConfirm = () => {
    if (nameValue.trim() !== "" && phoneValue.trim() !== "" && cpfValue.trim() !== "" && emailValue.trim() !== "" && !edit) {
      createVisitor({name: nameValue, phone: phoneValue, cpf: cpfValue, email: emailValue})
    } else if (nameValue !== "" && phoneValue !== "" && cpfValue !== "" && emailValue !== "") {
       updateVisitor({name: nameValue, phone: phoneValue, cpf: cpfValue, email: emailValue}, visitor.id)
    }

    setNameValue('')
    setPhoneValue('')
    setCpfValue('')
    setEmailValue('')

    navigate('/visitors')
  }

  const handleCancel = () => {
    setNameValue('')
    setPhoneValue('')
    setCpfValue('')
    setEmailValue('')

    navigate('/visitors')
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
