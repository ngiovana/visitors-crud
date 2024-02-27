import styled from 'styled-components'

import BorderColorIcon from '@mui/icons-material/BorderColor'
import DeleteIcon from '@mui/icons-material/Delete'

export const VisitorsContainer = styled.div`
  height: 28rem;
  width: 70rem;
  margin: 5rem auto;
  padding: 2.5rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 6px ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  background: ${(props) => props.theme['white']};
`

export const VisitorsHeaderContainer = styled.header`
  height: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

export const HeaderTitle = styled.h1`
  font-weight: bold;
`

export const VisitorsTable = styled.table`
  height: 22rem;
  font-size: 0.9rem;
  font-weight: 500;
  
  display: flex;
  flex-direction: column;
`

export const VisitorsTableRow = styled.tr`
  height: 2rem;
  margin-bottom: 0.3rem;
  gap: 5rem;
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
`

export const VisitorsTableHeaderItem = styled.th`
  width: 7rem;
  text-align: start;
`

export const VisitorsTableDataItem = styled.td`
  width: 7rem;
  text-align: start;
  font-weight: 500;
  margin-top: 0.2rem;
`

export const VisitorsTableDataEmail = styled.td`
  width: 20rem;
  text-align: start;
  text-justify: center;
  font-weight: 500;
  margin-top: 0.2rem;
`

export const ButtonsContainer = styled.td`
  width: 4rem;
`
export const EditVisitorButton = styled.button`
  background-color: ${(props) => props.theme['gray-500']};
  border: none;
  cursor: pointer;
  margin-right: 4px;
`
export const EditVisitorIcon = styled(BorderColorIcon)`
  color: ${(props) => props.theme.white};
`

export const DeleteVisitorButton = styled.button`
  border: none;
  background-color: ${(props) => props.theme.white};
`

export const DeleteButtonIcon = styled(DeleteIcon)`
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
`
