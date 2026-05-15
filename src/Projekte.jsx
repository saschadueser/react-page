import { useState } from 'react'
import './styles/Projekte.css'

import mockupNightlife from './assets/mockup-nightlifeevents.jpg';
import mockupTUS from './assets/mockup-tuseversten.jpg';
import mockupTTC from './assets/mockup-ttcoldenburg.jpg';


export default function Projekte() {

    const chosenProjects = [
        {
            title: "TuS Eversten",
            text: "Website-Relaunch für den TuS Eversten aus Oldenburg auf Basis von WordPress. Die bestehende Vereinswebsite wurde modernisiert und strukturell überarbeitet, um Inhalte klarer darzustellen und die Nutzung auf mobilen Geräten deutlich zu verbessern. Dabei wurde das bestehende Corporate Design übernommen und in ein zeitgemäßes Webdesign übersetzt.",
            logoURL: "src/assets/logos/tuseversten-logo.png",
            websiteLink: "https://tus-eversten.de",
            previewImgURL: mockupTUS
        },
        {
            title: "Nightlife Events",
            text: "Entwicklung einer WordPress-Website für Nightlife Events aus Wilhelmshaven zur Vermarktung von Partyreisen nach Kroatien. Im Mittelpunkt stand eine klare Präsentation des Reiseangebots sowie eine gezielte Nutzerführung, die Interessenten schnell zu einer Anfrage führt.",
            logoURL: "src/assets/logos/nightlifeevents-logo.png",
            websiteLink: "https://nightlifeevents.eu",
            previewImgURL: mockupNightlife
        },
        {
            title: "TTC Oldenburg",
            text: "Redesign der Website des TTC Oldenburg mit dem Ziel, Vereinsinformationen übersichtlich und modern darzustellen. Die neue Struktur verbessert die Orientierung für Mitglieder und Interessenten und sorgt für einen zeitgemäßen, vertrauenswürdigen Online-Auftritt.",
            logoURL: "src/assets/logos/ttcoldenburg-logo.png",
            websiteLink: "https://ttc-oldenburg.de",
            previewImgURL: mockupTTC
        }
    ]

    const [activeProjekt, setActiveProjekt] = useState(0)

    return (
        <section className="projekte">
            <h2>Projekte</h2>
            <div className='section-content'>
                <div className="projekte-wrapper">
                    <div className="projekte-preview" style={{backgroundImage: `url(${chosenProjects[activeProjekt].previewImgURL})`}}></div>
                    <div className="projekte-area">
                        <nav className="projekte-navigation">
                            {
                                chosenProjects.map( (el, index) => {
                                    return (
                                        <div 
                                        className={`projekt-logo ${activeProjekt === index ? "active" : ""}`}
                                        onClick={
                                            () => setActiveProjekt(index)
                                        }>
                                            <img src={el.logoURL}/>
                                            <p>{el.title}</p>
                                        </div>
                                    )
                                })
                            }
                        </nav>
                        <div className='projekte-details-wrapper'>
                            <div className="projekte-details">
                                {
                                    chosenProjects.map( (el, index) => {
                                        return (
                                            <div className='projekt-text' style={{opacity: `${activeProjekt === index ? 1 : 0}`}}>
                                                <h3>{el.title}</h3>
                                                <p>{el.text}</p>
                                                <a href={el.websiteLink} target='_blank'>Link zur Website <span className='fa fa-external-link'></span></a>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}