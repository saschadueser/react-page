import './styles/Leistungen.css'

export default function Intro() {

    const servicePoints = [
        {
            title: "Website-Erstellung",
            text: "Professionelle Websites für kleine Unternehmen und Selbständige.",
            bulletpoints: ["Mobiloptimierung", "Barrierefrei", "Schnell & SEO-ready"],
            icon: "fa fa-laptop"
        },
        {
            title: "Updates & Wartung",
            text: "Deine Website bleibt sicher, funktioniert einwandfrei und ist jederzeit online - Ich kümmere mich darum!",
            bulletpoints: [],
            icon: "fa fa-gears"
        },
        {
            title: "Optimierung der Website",
            text: "Schnelle Ladezeiten und eine optimale Nutzererfahrung machen eine erfolgreiche Website aus. Ich unterstütze dich bei der nachhaltigen Optimierung.",
            bulletpoints: [],
            icon: "fa fa-bolt-lightning"
        },
        {
            title: "SEO",
            text: "Ich verbessere das Ranking deiner Website in den Google-Suchergebnissen und sorge dafür, dass dein Unternehmen besser gefunden wird. Durch gezielte SEO-Optimierung erhöhe ich nachhaltig deine Sichtbarkeit und gewinne mehr relevante Besucher.",
            bulletpoints: [],
            icon: "fa fa-search"
        }
    ]

    return (
        <section className="services">
            <h2>Leistungen</h2>
            <p>Ich begleite dich bei der Erstellung deiner Website – vom Webdesign über die Entwicklung bis zur laufenden Pflege.</p><p> Durch die Umsetzung aus einer Hand entsteht eine Website, die nicht nur professionell wirkt, sondern auch suchmaschinenoptimiert aufgebaut ist und langfristig neue Kunden gewinnen kann.</p>
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