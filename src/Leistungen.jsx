import './styles/Leistungen.css'

export default function Intro() {

    const servicePoints = [
        {
            title: "Website",
            text: "Moderne, schnelle Websites für kleine Unternehmen, die professionell wirken und neue Kunden gewinnen. Von der Planung bis zum fertigen Online-Auftritt."
        },
        {
            title: "Updates & Wartung",
            text: "Regelmäßige Updates, Pflege und Wartung sorgen dafür, dass deine Website sicher, aktuell und zuverlässig erreichbar bleibt."
        },
        {
            title: "Optimierung der Website",
            text: "Bessere Google-Rankings, schnellere Ladezeiten und eine optimale Nutzererfahrung machen eine erfolgreiche Website aus. Ich unterstütze dich bei der nachhaltigen SEO-Optimierung."
        },
        {
            title: "XXX",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sit placeat iure nostrum aperiam dicta!"
        }
    ]

    return (
        <section className="services">
            <h2>Leistungen</h2>
            <div className='services-wrapper'>
                {
                    servicePoints.map( el => {
                        return (
                            <div className="service">
                                <h3>{el.title}</h3>
                                <p>{el.text}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>

    )
}