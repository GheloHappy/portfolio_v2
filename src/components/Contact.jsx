import '../css/contact.css'
import { contactInfos, socials } from './infos/ContactInfo';

const Contact = () => {
    return (
        <div className="contact-page" id='contact'>
            <div className='contact-flex'>
                <div className='contact-flex-left'>
                    <h1>Contact</h1>
                </div>
                <div className='contact-flex-right'>
                    <div className='contact-flex-right-grid'>
                        {socials.map((links, index) => (
                            <div key={index} className='links'>
                                <a href={links.value} target="_blank" rel="noopener noreferrer">
                                    <span className="links-icon">{links.icon}</span>
                                    <span className="links-label">{links.label}</span>
                                </a>
                            </div>
                        ))}
                        {contactInfos.map((contact, index) => (
                            <div className='links' key={index}>
                                <p>
                                    <span className="links-icon">{contact.icon}</span>
                                    <span className="links-label">{contact.value}</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;