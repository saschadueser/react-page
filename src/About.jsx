import './styles/About.css'

import portrait from './assets/selbstportrait.jpg'

export default function About() {
    return (
        <section className='about'>
        <h2>Über Mich</h2>
        <img src={portrait} alt="" />
        <p>
            Ich bin <strong>Sascha aus Westerstede</strong> und helfe kleinen Unternehmen dabei, mit <strong>modernen Websites</strong> online sichtbar zu werden und neue Kunden zu gewinnen.
        </p>

        <p>
            Webdesign ist für mich mehr als nur ein Beruf – ich mache mein <strong>Hobby zum Beruf</strong>. Ich bin mit dem Internet aufgewachsen und habe mich schon früh für die <strong>Entwicklung von Websites</strong> und digitale Lösungen begeistert. Diese Leidenschaft prägt jedes Projekt, das ich umsetze.
        </p>

        <p>
            Als <strong>Webdesigner</strong> entwickle ich individuelle, schnelle und benutzerfreundliche <strong>Websites für kleine Unternehmen</strong>, die nicht nur gut aussehen, sondern vor allem <strong>mehr Anfragen und Kunden</strong> bringen.
        </p>

        <p>
            Dabei begleite ich dich von der ersten Idee über die Umsetzung bis hin zur <strong>laufenden Wartung und Optimierung deiner Website</strong>. So bleibt dein Auftritt technisch aktuell, sicher und leistungsstark.
        </p>

        <p>
            Mir ist wichtig, dass deine Website nicht nur online ist, sondern für dich arbeitet – indem sie Vertrauen aufbaut, deine Leistungen klar präsentiert und neue Kunden anzieht.
        </p>

        <p>
            Neben der Erstellung übernehme ich auch <strong>SEO-Optimierung</strong>, <strong>Website-Wartung</strong> und technische Verbesserungen für bessere <strong>Google-Rankings</strong> und schnellere Ladezeiten.
        </p>

    </section>
    )
}