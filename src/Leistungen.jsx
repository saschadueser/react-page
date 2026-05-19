import './styles/Leistungen.css'

export default function Intro() {

    const servicePoints = [
        {
            title: "Website-Erstellung",
            text: "Individuelle Websites und OnePager für Unternehmen, Vereine und Startups – modern, übersichtlich und auf allen Geräten nutzbar.",
            bulletpoints: ["Professionelles Auftreten online - auch gegenüber deinen Mitbewerbern", "Eine Website, die auf allen Geräten funktioniert", "Kunden finden dich online, ohne Zusatzkosten.", "Zeit sparen, weil Anfragen direkt über deine Website eingehen"],
            icon: "fa fa-laptop"
        },
        {
            title: "Updates & Wartung",
            text: "Deine Website bleibt sicher, funktioniert einwandfrei und ist jederzeit online",
            bulletpoints: ["Kein Stress mit Updates, Funktionalität oder Backups", "Regelmäßige Backups - Im Ernstfall kann alles wiederhergestellt werden", "Bei Problemen immer einen Ansprechpartner", "Deine Website bleibt im Betrieb"],
            icon: "fa fa-gears"
        },
        {
            title: "Technische Optimierung",
            text: "Technische Verbesserungen sorgen für schnellere Ladezeiten und eine bessere Nutzererfahrung.",
            bulletpoints: ["Mehr Besucher werden zu echten Anfragen oder Käufen", "Besseres Ranking in den Google Suchergebnissen", "Schnelle Seiten-Ladezeit, Besucher bleiben länger"],
            icon: "fa fa-bolt-lightning"
        },
        {
            title: "Content & Inhaltspflege",
            text: "Gute Inhalte sorgen dafür, dass eine Website professionell wirkt und Informationen klar vermittelt - und bei Google punktet.",
            bulletpoints: ["Besucher verstehen dich und deine Lösung sofort", "Texte, die zu dir und deiner Zielgruppe passen - kein 08/15", "Bessere Texte sorgen für besseres Ranking in den Google Suchergebnissen"],
            icon: "fa fa-pen"
        }
    ]

    return (
        <section className="services">
            <h2>Wie ich dir helfe.</h2>
            <div className='section-content'>
                <p>Moderne Websites bestehen heute aus mehr als nur gutem Design. Ich unterstütze Unternehmen und Startups aus Westerstede und Umgebung bei der Erstellung professioneller Webseiten – von der Entwicklung bis zur technischen Optimierung.</p>
                <div className='section-content services-wrapper'>
                    {
                        servicePoints.map( el => {
                            return (
                                <div className="service">
                                    <div className={el.icon}></div>
                                    <h3>{el.title}</h3>
                                    <p>{el.text}</p>
                                    <ul>
                                        {el.bulletpoints.map( bp => {
                                            return (
                                                <li>{bp}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}