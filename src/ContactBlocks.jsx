import './styles/ContactBlocks.css'

export default function ContactBlocks(props) {

    function checkForContent(option) {
        if (option.includes("@")) {
            return `mailto:${option}`
        } else if (/^\d+$/.test(option)) {
            return `tel:${option}`
        } else {
            return option
        }
    }

    return (
        <>
            <h4>Weitere Kontakt-Optionen</h4>
            <div className="contact-options">
                {
                    props.contactOptions.map( option => {
                        return (
                            <a 
                            className='contact-option' 
                            href={checkForContent(option.link)} 
                            target="_blank"><div className={`${option.icon}`}></div>{option.title}</a>
                        )
                    })
                }
            </div>
        </>
    )
}