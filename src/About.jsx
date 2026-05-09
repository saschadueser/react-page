import './styles/About.css'

import portrait from './assets/selbstportrait.jpg'

export default function About() {
    return (
        <section className='about'>
        <h2>Über Mich</h2>
        <img src={portrait} alt="" />
        <p>
            Ich bin <strong>Sascha aus Westerstede</strong> und entwickle moderne, schnelle und benutzerfreundliche <strong>Websites für kleine Unternehmen</strong>.
        </p>

        <p>
            Mein Ziel ist es, Websites zu erstellen, die nicht nur professionell aussehen, sondern auch <strong>mehr Anfragen und Kunden</strong> bringen.
        </p>

        <p>
            Neben der Erstellung übernehme ich außerdem <strong>Wartung</strong>, <strong>SEO-Optimierung</strong> und technische Verbesserungen für eine sichere und leistungsstarke Website.
        </p>
    </section>
    )
}