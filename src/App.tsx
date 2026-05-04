import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import IvanaDimitrijeTemplate from './templates/ivana-dimitrije/index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ivana-dimitrije" element={<IvanaDimitrijeTemplate />} />
        <Route path="/ivana-dimitrije/*" element={<IvanaDimitrijeTemplate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
