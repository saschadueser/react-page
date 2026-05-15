import './styles/About.css'

import portrait from './assets/selbstportrait.jpg'

export default function About() {
    return (
        <section className='about'>
            <h2>Über Mich</h2>
            <div className='section-content'>
                <img src={portrait} alt="" />

                <p>Ich bin Sascha Düser und entwickle <strong>moderne Websites für kleine Unternehmen, Vereine und Startups.</strong></p>
                <p>Den Einstieg in die Webentwicklung habe ich mir eigenständig beigebracht – mit dem Anspruch, Websites zu erstellen, die nicht nur gut aussehen, sondern auch technisch sauber und benutzerfreundlich funktionieren.</p>
                <p>Mein Fokus liegt auf modernen, responsiven Websites mit klarem Design, schneller Ladezeit und einer verständlichen Nutzerführung. Dabei ist mir eine <strong>persönliche und unkomplizierte Zusammenarbeit</strong> besonders wichtig.</p>
                <p>Als Webdesigner aus <strong>Westerstede</strong> unterstütze ich Unternehmen dabei, online professionell aufzutreten und besser gefunden zu werden.</p>
            </div>
    </section>
    )
}