import styled from 'styled-components'

interface InputContainerProps {
  isCPF: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  height: 2rem;
  width: ${({ isCPF }) => isCPF ? "15rem" : "24rem"};
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`

export const DefaultInput = styled.input`
  padding: 0.5rem;

  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;

  color: ${(props) => props.theme['gray-400']};

  ::placeholder {
    color: ${(props) => props.theme['gray-300']};
    opacity: 1;
  }
`

export const InputTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
`