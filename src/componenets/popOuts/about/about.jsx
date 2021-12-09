import React from 'react'
import './about.scss';
import CloseIcon from '@material-ui/icons/Close';

const About = ({toggleAboutPop}) => {
    return (
        <div className="about">
            <div className="about__top">
                <h1>About me</h1>
                <CloseIcon onClick={toggleAboutPop}/>
            </div>
            <div className="about__content">

            </div>
        </div>
    )
}

export default About
