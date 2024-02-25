import styled from 'styled-components'

export const LogonContainer = styled.div`
  height: 20rem;
  width: 25rem;
  margin: 5rem auto;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 6px ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  background: ${(props) => props.theme['white']};
`

export const LoginForm = styled.form`
  height: 14rem;
  margin-top: 0.5rem;

  display: flex;
  flex-direction: column;

  gap: 0.7rem;

  p {
    width: 3rem;
    height: 1.5rem;

    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme.purple};

    border-bottom: 2px solid ${(props) => props.theme.purple};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`