import './styles/App.css'

import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Leistungen from './Leistungen.jsx';
import Projekte from './Projekte.jsx'
import Form from './Form.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
      <Header />
      
      <Hero />

    <main>
        <Leistungen />
        <Projekte />
        <About />
        <Form />
    </main>

    <Footer />
    </>
  )
}

export default App
