import { Routes, Route } from "react-router-dom"
//components
import Home from "../../pages/Home/Home"
import About from "../../pages/About/About"
import Skills from "../../pages/Skills/Skills"
import Contact from "../../pages/Contact/Contact"
import Projects from "../../pages/Projects/Projects"

const Layout = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default Layout
