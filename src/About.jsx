import './styles/About.css'

import portrait from './assets/selbstportrait.jpg'

export default function About() {
    return (
        <section className='about'>
            <h2>Ein Ansprechpartner - kein Callcenter</h2>
            <div className='section-content'>
                <img src={portrait} alt="" />
                <p>Moin, ich bin Sascha — dein Ansprechpartner für einen professionellen Webauftritt.</p>
                <p>Webdesign begleitet mich schon seit Jahren — was als Leidenschaft begann, ist heute meine Selbstständigkeit. Ich bringe mir alles eigenständig bei, bleibe dadurch nah an aktuellen Technologien und setze das direkt in die Praxis um.</p>
                <p>Als Einzelperson hast du bei mir immer einen direkten Draht — keine Warteschleifen, kein Weitergeben an Kollegen. Ich kümmere mich persönlich um dein Projekt, von der ersten Idee bis zur fertigen Website.</p>
                <p>Mein Fokus liegt auf kleinen Unternehmen und Selbstständigen in Westerstede und der Region — Menschen, die einen verlässlichen Partner brauchen, der ihre Website nicht nur einmal baut, sondern auch langfristig betreut.</p>
            </div>
    </section>
    )
}