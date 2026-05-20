import { useState } from 'react'
import './styles/Faq.css'

export default function Faq() {

    const [faqList, setFaqList] = useState([
        {
            question: "Wie läuft die Zusammenarbeit ab?",
            answer: "Wir beginnen mit einem kurzen Kennenlerngespräch - kostenlos und unverbindlich. Ich lerne dein Unternehmen kennen und du erklärst mir deine Wünsche an die neue Website. Im Anschluss erstelle ich ein Konzept, wir stimmen Design und Inhalte gemeinsam ab, und ich setze alles um. Vor dem Launch bekommst du die Möglichkeit, Feedback zu geben. Deine Seite geht online, sobald du vollständig zufrieden bist.",
            active: false
        },
        {
            question: "Wie lange dauert es?",
            answer: "Das hängt von dem gesamten Umfang ab. Ein einzelner OnePager (Nur eine einzelne Seite) kann innerhalb von 24 Stunden fertig sein, dauert in der Regel aber 1-2 Wochen. Eine Website mit mehreren Unterseiten dauert üblicherweise 3-5 Wochen. Wie schnell es bis zur Live-Schaltung dauert, hängt von den individuellen Bedürfnissen ab und wie zügig Inhalte und Feedback zwischen uns ausgetauscht werden.",
            active: false
        },
        {
            question: "Was kostet eine Website?",
            answer: "Die tatsächlichen Kosten sind individuell und schwer zu Anfang bereits zu benennen. Ich biete als Orientierung drei Preis-Pakete an. Vom einfachen OnePager für 500,- €, über eine Business Website mit bis zu 5 Unterseiten, bis hin zu individuellen Lösungen. Eine genaue Übersicht findest du im Preisbereich weiter oben. Bei Fragen erstelle ich dir gerne ein persönliches Angebot.",
            active: false
        },
        {
            question: "Was passiert nach dem Launch?",
            answer: "Ich lasse dich nicht alleine. Nach dem Launch stehe ich dir für Fragen zur Verfügung und biete auf Wunsch laufende Wartung und Pflege an - damit deine Website sicher, aktuell udn schnell bleibt.",
            active: false
        }    
    ])

    

    return (
        <section id="faq">
            <h2>Häufige Fragen</h2>
            <div className="section-content">
                <div className='faq-list'>
                {
                    faqList.map( (faqItem, faqIndex) => {
                        return (
                            <div className='faq-item' onClick={ () => {
                                    setFaqList( prev => {
                                        return prev.map( (el, i) => {
                                           return i === faqIndex ? {...el, active: !el.active} : el
                                        })
                                    })
                                }}>
                                <h3>{faqItem.question}</h3>
                                <p className={faqItem.active ? "active" : null}>{faqItem.answer}</p>
                                <div className={faqItem.active ? "fa fa-minus" : "fa fa-plus"}></div>
                            </div>
                        )
                    })
                }
                </div>
                <a href="">Zu allen Fragen/Antworten</a>
            </div>
        </section>
    )
}