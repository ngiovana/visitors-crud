import styled from 'styled-components'

export const AddVisitorContainer = styled.div`
  height: 28rem;
  width: 35rem;
  margin: 5rem auto;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 6px ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  background: ${(props) => props.theme['white']};
`

export const FormTitle = styled.p`
    width: 7.5rem;
    height: 2rem;
    margin-top: 0.7rem;

    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.purple};

    border-bottom: 2px solid ${(props) => props.theme.purple};
`

export const InputContainer = styled.div`
  width: 23rem;
  display: flex;
  flex-direction: column;
`

export const ImgContainer = styled.div`
  width: 6rem;
  padding-top: 0.3rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const AddVisitorForm = styled.form`
  height: 15rem;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: row;

  border-bottom: 1px solid ${(props) => props.theme.purple};

  gap: 1.5rem;
`

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: end;
  gap: 0.5rem;
`