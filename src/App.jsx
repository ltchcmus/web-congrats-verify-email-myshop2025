import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SuccessPage from './pages/SuccessPage'
import ErrorPage from './pages/ErrorPage'
import NotFoundPage from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuccessPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
