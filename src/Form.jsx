import './styles/Form.css'

import ContactBlocks from './ContactBlocks'

export default function Form() {
    return (
        <section>
            <h2>Lass uns über den Vorhaben sprechen</h2>
            <div className='section-content'>
                <form action="">
                    <label htmlFor="name">Dein Name:</label>
                    <input type="text" id="name" placeholder='Max Mustermann' required />

                    <label htmlFor="mail">Deine E-Mail:</label>
                    <input type="email" id="mail" placeholder='max-mustermann@mail.de' required/>

                    <label htmlFor="phone">Deine Telefonnummer:</label>
                    <input type="tel" id="phone" placeholder='0123 456789' />

                    <label htmlFor="message">Deine Nachricht für mich:</label>
                    <textarea rows={10} resi name="message" id="message" required placeholder='Hallo Sascha, meine Anfrage bezieht sich auf folgendes...'></textarea>
                
                    <input type="submit" value="Absenden" />
                </form>
                <ContactBlocks contactOptions = {[
                    {
                        title: "eMail",
                        link: "",
                        icon: "fa fa-envelope"            
                    }, 
                    {
                        title: "Telefon",
                        link: "",
                        icon: "fa fa-phone"
                    },
                    {
                        title: "LinkedIN-Profil",
                        link: "",
                        icon: "fa-brands fa-linkedin"
                    }
                    ]} />
                
            </div>
        </section>
    )
}