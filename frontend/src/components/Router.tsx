import { Routes, Route }  from 'react-router-dom'
import { Logon } from '../pages/Logon'
import { AddVisitor } from '../pages/AddVisitor'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Logon />} />
      <Route path="/add" element={<AddVisitor />} />
    </Routes>
  )
}