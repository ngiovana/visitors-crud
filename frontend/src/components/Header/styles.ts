import styled from 'styled-components'

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

export const HeaderContainer = styled.header`
  padding: 0.5rem;

  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 4px;

  color: ${(props) => props.theme['gray-300']};
  gap: 0.7rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HeaderIcon = styled(PersonAddAlt1Icon)`
  color: ${(props) => props.theme['gray-400']};
`

export const HeaderTitle = styled.p`
  color: ${(props) => props.theme['gray-300']};
  margin-top: 6px;
`