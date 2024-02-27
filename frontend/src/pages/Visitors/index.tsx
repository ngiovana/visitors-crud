import { Button } from '../../components/Button'
import { HeaderTitle, VisitorsContainer, VisitorsHeaderContainer, VisitorsTable, VisitorsTableRow, VisitorsTableHeaderItem, VisitorsTableDataItem, VisitorsTableDataEmail, EditVisitorButton, DeleteVisitorButton, ButtonsContainer, EditVisitorIcon, DeleteButtonIcon } from './styles'

import { getVisitors, deleteVisitor } from '../../services/visitorService'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Visitors() {
  const [visitors, setVisitors] = useState([{}])

  const navigate = useNavigate()
  
  useEffect( () => { 
    async function fetchData() {
      try {
        const data = await getVisitors()
        setVisitors(data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const visitorsCount = visitors.length

  const handleClick = () => {}

  const handleDelete = async(visitorId) => {
    await deleteVisitor(visitorId).then(navigate(0))
  }

  return (
    <VisitorsContainer>
      <VisitorsHeaderContainer>
        <HeaderTitle>
          Visitantes
        </HeaderTitle>
        <Link to="/add" style={{ textDecoration: 'none' }}>
          <Button onClick={() => handleClick()} isCancel={false} isConfirm={false} isImg={false}/>
        </Link>
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
          {visitorsCount > 0 ? (
            <>
              {visitors.map((visitor, index) => (
                <VisitorsTableRow key={index}>
                  <VisitorsTableDataItem>{visitor.name}</VisitorsTableDataItem>
                  <VisitorsTableDataItem>{visitor.phone}</VisitorsTableDataItem>
                  <VisitorsTableDataEmail>{visitor.email}</VisitorsTableDataEmail>

                  <ButtonsContainer>
                    <Link style={{ textDecoration: 'none' }} to={`/add/${visitor.id}`}>
                      <EditVisitorButton>
                        <EditVisitorIcon />
                      </EditVisitorButton>
                    </Link>
                    <DeleteVisitorButton onClick={() => handleDelete(visitor.id)} >
                      <DeleteButtonIcon />
                    </DeleteVisitorButton>
                  </ButtonsContainer>
                </VisitorsTableRow>
              ))}
            </>
          ) : (<></>)}
        </tbody>
      </VisitorsTable>
    </VisitorsContainer>
  )
}