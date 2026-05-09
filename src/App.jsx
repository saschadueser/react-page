import './styles/App.css'
import './assets/fontawesome/css/all.min.css'

import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Leistungen from './Leistungen.jsx';
import Projekte from './Projekte.jsx'
import Form from './Form.jsx'
import ContactBlocks from './ContactBlocks.jsx';
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
        <section id="contact">
          <Form />
          <ContactBlocks contactOptions = {[
            {
              title: "eMail",
              link: "",
              icon: "fa fa-envelope"            
            }, 
            {
              title: "Telefon",
              link: "",
              icon: "fa fa-phone"
            },
            {
              title: "LinkedIN-Profil",
              link: "",
              icon: "fa-brands fa-linkedin"
            }
          ]} />
        </section>

    </main>

    <Footer />
    </>
  )
}

export default App
