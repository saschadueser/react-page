import './styles/Form.css'

export default function Form() {
    return (
        <section className="contact-form">
            <h2>Kontakt</h2>
            <form action="">
                <label htmlFor="name">Dein Name:</label>
                <input type="text" id="name" placeholder='Max Mustermann' />

                <label htmlFor="mail">Deine E-Mail:</label>
                <input type="email" id="mail" placeholder='max-mustermann@mail.de'/>

                <label htmlFor="phone">Deine Telefonnummer:</label>
                <input type="tel" id="phone" placeholder='0123 456789' />

                <label htmlFor="message">Deine Nachricht für mich:</label>
                <textarea rows={10} draggable="false" name="message" id="message" placeholder='Hallo Sascha, meine Anfrage bezieht sich auf folgendes...'></textarea>
            
                <input type="submit" value="Absenden" />
            </form>
        </section>
    )
}