import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login.tsx"
import Cadastro from "./pages/cadastro/Cadastro.tsx"

import { AuthProvider } from './contexts/AuthContext'

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
