import './styles/App.css'
import './assets/fontawesome/css/all.min.css'

import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Leistungen from './Leistungen.jsx';
import Projekte from './Projekte.jsx'
import Form from './Form.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'

import PriceTable from './PriceTable.jsx'


function App() {

  return (
    <>
      <Header />
      
      <Hero />

    <main>
        <Leistungen />
        <Projekte />
        <PriceTable />
        <About />
        <Form />

    </main>

    <Footer />
    </>
  )
}

export default App
