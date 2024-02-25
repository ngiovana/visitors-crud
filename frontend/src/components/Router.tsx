import { Routes, Route }  from 'react-router-dom'
import { Logon } from '../pages/Logon'
import { AddVisitor } from '../pages/AddVisitor'
import { Visitors } from '../pages/Visitors'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Logon />} />
      <Route path="/visitors" element={<Visitors />} />
      <Route path="/add" element={<AddVisitor />} />
    </Routes>
  )
}