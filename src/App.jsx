import './styles/App.css'

import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Leistungen from './Leistungen.jsx';
import Projekte from './Projekte.jsx'
import Form from './Form.jsx'

function App() {

  return (
    <>
      <Header />
      
      <Hero />

    <main>
        <Leistungen />
        <Projekte />
        <Form />
    </main>

    
    </>
  )
}

export default App
