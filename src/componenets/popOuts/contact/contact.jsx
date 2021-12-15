import React, { useRef, useState, useEffect }  from 'react'
import './contact.scss';
import CloseIcon from '@material-ui/icons/Close';
import { TextField, Button } from "@material-ui/core";
import emailjs from 'emailjs-com';
import InputField from './bits/input';
import TextareaField from './bits/text';
import Git from '../../../assets/icons/Git.png';
import Linked from '../../../assets/icons/Linked.png';
import Steam from '../../../assets/icons/Steam.png'

const About = ({toggleAboutPop}) => {
    const [values, setValues] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_9ynf4vs', 'template_jpo2e66', values, 'user_zWvJMbAmajbgsNPIph8xU')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    user_name : '',
                    user_email: '',
                    message: ''
            });
            setStatus('SUCCESS');
            }, error => {
            console.log('FAILED...', error);
        });
        e.target.reset();
    }
    
    useEffect(() => {
        if(status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status]);
    
    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="about">
            <div className="about__top">
                <h1>Get in touch</h1>
                <CloseIcon onClick={toggleAboutPop}/>
            </div>
            <div className="about__form">
            <div className="about__form-container">
                    {status && renderAlert()}
                    <form onSubmit={handleSubmit}>
                        <InputField value={values.user_name} handleChange={handleChange} label="Full Name" name="user_name" type="text" placeholder="John Doe" />
                        <InputField value={values.user_email} handleChange={handleChange} label="E-Mail" name="user_email" type="email" placeholder="jphn@example.com" />
                        <TextareaField value={values.message} handleChange={handleChange} label="Your message here" name="message"/>
                        <button type="submit" className="about__form-container-button"> 
                            Send
                        </button>
                    </form> 
                </div>
            </div>
            <div className="links">
                <h2>You can also find me here:</h2>
                <div className="links-link">
                    <a  href="https://github.com/wtang98" target="_blank">
                        <img src={Git} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/wei-tong-tang-81bb851b2/" target="_blank">
                        <img src={Linked} alt="LinkedIn icon" />
                    </a>
                    <a href="https://steamcommunity.com/profiles/76561198049607035?utm_source=SteamLadder.com" target="_blank">
                        <img src={Steam} alt="Steam icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}
const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>your message submitted successfully</p>
    </div>
)

export default About
