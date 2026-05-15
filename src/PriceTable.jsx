import './styles/Preispakete.css'

export default function PriceTable() {

    const packages = [
        {
            title: "Paket Single",
            description: "Ideal für den schnellen, professionellen Einstieg ins Web",
            bulletpoints: [
                "1 individuelle Landingpage",
                "Basis Kontaktformular",
                "Einbindung Social Media Links",
                "Basis SEO",
                "In 24h erster Entwurf bei vorhandenem Content",
                "1 Korrekturschleife"
            ],
            price: 790
        },
        {
            title: "Paket Business",
            description: "Für den professionellen Auftritt für Business",
            bulletpoints: [
                "Bis zu 5 Unterseiten",
                "Erweitere SEO- & Ladezeitenoptimierung",
                "Einrichtung Blog-/News-Seite",
                "Bis zu 2 Kontaktformulare",
                "Strategischer Seitenaufbau",
                "2 Korrekturschleifen"
            ],
            price: 1200
        },
        {
            title: "Paket Individual",
            description: "Für den individuellen Web-Auftritt, maßgeschneidert.",
            bulletpoints: [
                "Individuelle Seitenanzahl",
                "Individuelles Design",
                "Erweitere SEO- und Performance-Optimierung",
                "Individuelle Kontaktformulare",
                "Individuelle Animationseffekte",
                "Wartung und Betreuung für 1 Jahr"
            ],
            price: 2490
        }
    ]

    return (
        <section id="preise-sektion">
            <h2>Angebotene Preispakete</h2>
            <div className="section-content">
                <div className="preis-pakete">
                    {
                        packages.map( pack => {
                            return (
                                <div className="preis-paket">
                                    <h3>{pack.title}</h3>
                                    <p>{pack.description}</p>
                                    <ul>
                                        {
                                            pack.bulletpoints.map( bp => {
                                                return (<li>{bp}</li>)
                                            })
                                        }
                                    </ul>
                                    <p>ab {pack.price.toLocaleString('de-DE')},- €</p>
                                    <a href="" className='button'>Paket anfragen</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}