import { Button } from '../../components/Button'
import { HeaderTitle, VisitorsContainer, VisitorsHeaderContainer, VisitorsTable, VisitorsTableRow, VisitorsTableHeaderItem, VisitorsTableDataItem, VisitorsTableDataEmail, EditVisitorButton, DeleteVisitorButton, ButtonsContainer, EditVisitorIcon } from './styles'

export function Visitors() {
  return (
    <VisitorsContainer>
      <VisitorsHeaderContainer>
        <HeaderTitle>
          Visitantes
        </HeaderTitle>
        <Button isCancel={false} isConfirm={false} isImg={false}/>
      </VisitorsHeaderContainer>

      <VisitorsTable>
        <thead>
          <VisitorsTableRow>
            <VisitorsTableHeaderItem>Nome</VisitorsTableHeaderItem>
            <VisitorsTableHeaderItem>Celular</VisitorsTableHeaderItem>
            <VisitorsTableHeaderItem>Email</VisitorsTableHeaderItem>
          </VisitorsTableRow>
        </thead>
        <tbody>
          <VisitorsTableRow>
            <VisitorsTableDataItem>Mário Quintana</VisitorsTableDataItem>
            <VisitorsTableDataItem>(47) 9999-9999</VisitorsTableDataItem>
            <VisitorsTableDataEmail>mario_quintana@bmasistemas.com.br</VisitorsTableDataEmail>

            <ButtonsContainer>
              <EditVisitorButton>
                <EditVisitorIcon />
              </EditVisitorButton>
              <DeleteVisitorButton />
            </ButtonsContainer>
          </VisitorsTableRow>

          <VisitorsTableRow>
            <VisitorsTableDataItem>Mário Quintana</VisitorsTableDataItem>
            <VisitorsTableDataItem>(47) 9999-9999</VisitorsTableDataItem>
            <VisitorsTableDataEmail>mario_quintana@bmasistemas.com.br</VisitorsTableDataEmail>

            <ButtonsContainer>
              <EditVisitorButton>
                <EditVisitorIcon />
              </EditVisitorButton>
              <DeleteVisitorButton />
            </ButtonsContainer>
          </VisitorsTableRow>

          <VisitorsTableRow>
            <VisitorsTableDataItem>Mário Quintana</VisitorsTableDataItem>
            <VisitorsTableDataItem>(47) 9999-9999</VisitorsTableDataItem>
            <VisitorsTableDataEmail>mario_quintana@bmasistemas.com.br</VisitorsTableDataEmail>

            <ButtonsContainer>
              <EditVisitorButton>
                <EditVisitorIcon />
              </EditVisitorButton>
              <DeleteVisitorButton />
            </ButtonsContainer>
          </VisitorsTableRow>
        </tbody>
      </VisitorsTable>
    </VisitorsContainer>
  )
}