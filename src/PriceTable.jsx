import './styles/Preispakete.css'

export default function PriceTable() {

    const packages = [
        {
            title: "Paket Single",
            description: "Ideal für den schnellen, professionellen Einstieg ins Web",
            bulletpoints: [
                "1 individuelle Landingpage",
                "Kontaktformular",
                "Impressum & Datenschutz-Seite",
                "Mobilfreundliches Design",
                "Logo-Einbindung",
                "SSL-Zertifikat & Hosting Einrichtung",
            ],
            price: 500
        },
        {
            title: "Paket Business",
            description: "Für den professionellen Auftritt für dein Business",
            bulletpoints: [
                "Bis zu 5 Unterseiten",
                "Kontaktformulare",
                "Impressum & Datenschutz-Seite",
                "Mobilfreundliches Design",
                "Logo- & CI-Einbindung",
                "SSL-Zertifikat & Hosting-Einrichtung",
                "SEO-Grundoptimierung",
                "Google MyBusiness-Einrichtung",
                "1 Monat Support inklusive"
            ],
            price: 1200
        },
        {
            title: "Paket Individual",
            description: "Für den individuellen Web-Auftritt, maßgeschneidert nach individueller Absprache.",
            bulletpoints: [
                "Beliebig viele Unterseiten",
                "Kontaktformulare",
                "Impressum & Datenschutz-Seite",
                "Mobilfreundliches Design",
                "Logo- & CI-Einbindung",
                "SSL-Zertifikat & Hosting-Einrichtung",
                "SEO-Grundoptimierung",
                "Google MyBusiness-Einrichtung",
                "1 Monat Support inklusive"
            ],
            price: 2000
        }
    ]

    return (
        <section id="preise-sektion">
            <h2>Faire Preise. Keine Überraschungen</h2>
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