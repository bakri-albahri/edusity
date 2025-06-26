import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/website/HomePage/HomePage'
import Program from './pages/website/Program/Program'
import AboutUs from './pages/website/AboutUs/AboutUs'
import Campus from './pages/website/Campus/Campus'
import Testimonials from './pages/website/Testimonials/Testimonials'
import ContactUs from './pages/website/ContactUs/ContactUs'
import GitHub from './pages/GitHub'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
    <Routes>
      <Route  path="/edusity" element={<GitHub />}>
        <Route path="" element={<HomePage />}/>
        <Route path="program" element={<Program />}/>
        <Route path="about" element={<AboutUs />}/>
        <Route path="campus" element={<Campus />}/>
        <Route path="testimonials" element={<Testimonials />}/>
        <Route path="contactus" element={<ContactUs />}/>
      </Route>
    </Routes>
   </div>
  )
}

export default App
