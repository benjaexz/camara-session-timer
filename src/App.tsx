import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { OperatorPage } from './pages/OperatorPage'
import { DisplayPage } from './pages/DisplayPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/operador" replace />} />
        <Route path="/operador" element={<OperatorPage />} />
        <Route path="/display" element={<DisplayPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App