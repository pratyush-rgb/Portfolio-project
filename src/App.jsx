import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/main/main'
import About from './components/About/About'
import Services from './components/Services/services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <About/>
      <Services />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App;
