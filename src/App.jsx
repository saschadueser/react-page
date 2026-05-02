import './styles/App.css'

import Header from './Header.jsx';
import Hero from './Hero.jsx';
import Leistungen from './Leistungen.jsx';
import Projekte from './Projekte.jsx'

function App() {

  return (
    <>
      <Header />
      
      <Hero />

    <main>
        <Leistungen />
        <Projekte />
    </main>

    
    </>
  )
}

export default App
