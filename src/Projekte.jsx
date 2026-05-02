import { useState } from 'react'
import './styles/Projekte.css'

export default function Projekte() {

    const chosenProjects = [
        {
            title: "TuS Eversten",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus exercitationem nostrum, enim alias cumque recusandae, sed ut corrupti corporis earum, facere culpa maxime esse?",
            logoURL: "src/assets/logos/tuseversten-logo.png"
        },
        {
            title: "Nightlife Events",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sequi ut veniam aliquid nam sint quasi eveniet praesentium ipsam omnis excepturi doloremque nostrum, illo sed?",
            logoURL: "src/assets/logos/nightlifeevents-logo.png"
        },
        {
            title: "TTC Oldenburg",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptatum quis distinctio, aliquam quibusdam numquam consequuntur ipsa sunt error aliquid pariatur, deleniti, reiciendis asperiores officiis!",
            logoURL: "src/assets/logos/ttcoldenburg-logo.png"
        }
    ]

    const [activeProjekt, setActiveProjekt] = useState(0)

    return (
        <section className="projekte">
            <h2>Projekte</h2>
            <div className="projekte-wrapper">
                <div className="projekte-preview"></div>
                <div className="projekte-area">
                    <nav className="projekte-navigation">
                        {
                            chosenProjects.map( (el, index) => {
                                return (
                                    <div onClick={
                                        () => setActiveProjekt(index)
                                    }><img src={el.logoURL}/></div>
                                )
                            })
                        }
                    </nav>
                    <div className="projekte-details" style={{transform: `translateX(-${activeProjekt*100}%)`}}>
                        {
                            chosenProjects.map( (el) => {
                                return (
                                    <div>
                                        <h3>{el.title}</h3>
                                        <p>{el.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}