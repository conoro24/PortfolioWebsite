import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_2o638y4',
                'template_l62w869',
                refForm.current,
                'y3DuauFPZKxDOA605'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Operation failed, please try again')
                }
            )
    }

    return (
    <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>
                    I am interested in full-time software developer roles.
                    If you have any open positions or any inquiries, don't hesitate
                    to contact me using the form below.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Conor O'Neill,
                <br />
                99 Welland Rd, Brookline
                <br />
                Boston, MA
                <br />
                <span>conorbrian99@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[42.333, -71.125]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[42.333, -71.125]}>
                        <Popup>Conor lives here!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    </>)
}

export default Contact