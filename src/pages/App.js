import Write from "./Write"
import Contact from "./Contact"
import About from "./About"
import User from "./User"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../components/layout"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<About/>} />
          <Route path="write" element={<Write/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="user" element={<User/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App