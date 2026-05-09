import './styles/Leistungen.css'

export default function Intro() {

    const servicePoints = [
        {
            title: "Website-Erstellung",
            text: "Individuelle Websites und OnePager für Unternehmen, Vereine und Startups – modern, übersichtlich und auf allen Geräten nutzbar.",
            bulletpoints: ["Individuelles Design", "Responsive-Design für alle Endgeräte", "Barrierefrei", "DSGVO-konform"],
            icon: "fa fa-laptop"
        },
        {
            title: "Updates & Wartung",
            text: "Deine Website bleibt sicher, funktioniert einwandfrei und ist jederzeit online",
            bulletpoints: ["Regelmäßige Sicherungen und Updates", "aktue Fehlerbehebung & Support"],
            icon: "fa fa-gears"
        },
        {
            title: "Technische Optimierung",
            text: "Technische Verbesserungen sorgen für schnellere Ladezeiten und eine bessere Nutzererfahrung.",
            bulletpoints: ["Schnellere Ladezeiten", "Optimierung für mobile Nutzung", "Strukturierte und barrierearme Umsetzung"],
            icon: "fa fa-bolt-lightning"
        },
        {
            title: "Content & Inhaltspflege",
            text: "Gute Inhalte sorgen dafür, dass eine Website professionell wirkt und Informationen klar vermittelt",
            bulletpoints: ["Erstellung und Pflege von Inhalten", "Optimierung und Setzen von Mediendaten"],
            icon: "fa fa-pen"
        }
    ]

    return (
        <section className="services">
            <h2>Leistungen</h2>
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
        </section>

    )
}