import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login.tsx"
import Cadastro from "./pages/cadastro/Cadastro.tsx"

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
