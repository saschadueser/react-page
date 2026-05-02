import { useState } from 'react'
import './styles/Projekte.css'

export default function Projekte() {

    const [activeProjekt, setActiveProjekt] = useState(0)
    const test = [1,2,3]

    return (
        <section className="projekte">
            <h2>Projekte</h2>
            <div className="projekte-wrapper">
                <div className="projekte-preview"></div>
                <div className="projekte-area">
                    <nav className="projekte-navigation">
                        {
                            test.map( (el, index) => {
                                return (
                                    <div onClick={
                                        () => setActiveProjekt(index)
                                    }>{el}</div>
                                )
                            })
                        }
                    </nav>
                    <div className="projekte-details" style={{transform: `translateX(-${activeProjekt*100}%)`}}>
                        <div>
                            <h3>TuS Eversten</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos incidunt distinctio alias quam, nulla accusamus at minus odio cupiditate adipisci non optio, praesentium repudiandae aspernatur?</p>
                        </div>
                        <div>
                            <h3>Nightlife Events</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis temporibus eos dolorem sit nisi libero, molestiae minima neque culpa aperiam praesentium nobis maxime similique atque?</p>
                        </div>     
                        <div>
                            <h3>TTC Oldenburg</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, sit placeat quos molestias molestiae sunt praesentium natus dolorum enim possimus officiis commodi et ut unde?</p>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    )
}