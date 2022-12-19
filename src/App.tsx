import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Registration from "./pages/Registration"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
