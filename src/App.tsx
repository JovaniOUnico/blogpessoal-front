import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login.tsx"
import Cadastro from "./pages/cadastro/Cadastro.tsx"
import ListaTemas from "./components/temas/listatemas/ListaTemas"
import FormTema from "./components/temas/formtema/FormTema"
import DeletarTema from "./components/temas/deletartema/DeletarTema"

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
            <Route path="/temas" element={<ListaTemas />} />
            <Route path="/cadastrartema" element={<FormTema />} />
            <Route path="/editartema/:id" element={<FormTema />} />
            <Route path="/deletartema/:id" element={<DeletarTema />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
