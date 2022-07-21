import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './components/layouts/Container'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Container customClass="min-height">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/company" element={<Company/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/newproject" element={<NewProject/>}/>
            <Route path="/project/:id" element={<Project/>}/>
        </Routes>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
