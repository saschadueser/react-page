import { useState } from 'react'
import './styles/Projekte.css'

import mockupNightlife from './assets/mockup-nightlifeevents.jpg';
import mockupTUS from './assets/mockup-tuseversten.jpg';
import mockupTTC from './assets/mockup-ttcoldenburg.jpg';


export default function Projekte() {

    const chosenProjects = [
        {
            title: "TuS Eversten",
            text: "WordPress-Webdesign für den TuS Eversten aus Oldenburg zur Modernisierung der Vereinswebsite. Ziel war eine klare Struktur, bessere mobile Nutzbarkeit und eine zeitgemäße Außendarstellung für Mitglieder und Interessenten.",
            logoURL: "src/assets/logos/tuseversten-logo.png",
            websiteLink: "https://tus-eversten.de",
            previewImgURL: mockupTUS
        },
        {
            title: "Nightlife Events",
            text: "Entwicklung einer conversion-optimierten WordPress-Website für Nightlife Events aus Wilhelmshaven zur Vermarktung von Partyreisen nach Kroatien. Fokus auf Buchungsführung, Zielgruppenansprache und Steigerung der Reiseanfragen.",
            logoURL: "src/assets/logos/nightlifeevents-logo.png",
            websiteLink: "https://nightlifeevents.eu",
            previewImgURL: mockupNightlife
        },
        {
            title: "TTC Oldenburg",
            text: "Redesign der WordPress-Website des TTC Oldenburg mit Fokus auf Benutzerfreundlichkeit, übersichtliche Darstellung von Vereinsinformationen und einem modernen, vertrauenswürdigen Auftritt für Mitglieder und Neuzugänge.",
            logoURL: "src/assets/logos/ttcoldenburg-logo.png",
            websiteLink: "https://ttc-oldenburg.de",
            previewImgURL: mockupTTC
        }
    ]

    const [activeProjekt, setActiveProjekt] = useState(0)

    return (
        <section className="projekte">
            <h2>Projekte</h2>
            <div className="projekte-wrapper">
                <div className="projekte-preview" style={{backgroundImage: `url(${chosenProjects[activeProjekt].previewImgURL})`}}></div>
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
                    <div className='projekte-details-wrapper'>
                        <div className="projekte-details" style={{transform: `translateX(-${activeProjekt*100}%)`}}>
                            {
                                chosenProjects.map( (el) => {
                                    return (
                                        <div>
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
        </section>
    )
}