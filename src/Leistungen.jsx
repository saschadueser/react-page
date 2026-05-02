import './styles/Leistungen.css'

export default function Intro() {

    const servicePoints = [
        {
            title: "Website erstellen",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sit placeat iure nostrum aperiam dicta!"
        },
        {
            title: "Updates & Wartung",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sit placeat iure nostrum aperiam dicta!"
        },
        {
            title: "Optimierung der Website",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sit placeat iure nostrum aperiam dicta!"
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