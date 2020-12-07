import React from 'react'

class ContactForm extends React.Component {

    render() {
        const formStyle = {
            textAlign: 'left'
        }
        const buttonsStyle = {
            margin: '1rem',
            textAlign: 'center',
        }
        return (
            <form style={formStyle} className="form" action="https://formspree.io/f/mjvpakoa" method="post">
                <div>
                    <label>Nom</label>
                    <input type="text" name="fullname" />
                </div>
                <div>
                    <label>E-mail</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Message</label>
                    <textarea name="message" rows="5"></textarea>
                </div>
                <ul className="actions" style={buttonsStyle}>
                    <li>
                        <button type="submit" className="button special">Envoyer</button>
                    </li>
                </ul>
            </form>
        );
    }
}

export default ContactForm