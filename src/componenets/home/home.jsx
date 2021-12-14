import React, {useState} from 'react';
import './home.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../nav/nav';
import UnderLand from '../underLand/underLand';

const Home = () => {
    AOS.init();

    return (
        <>
            <div className="home">
                <div className="home__default">
                    <Nav/>
                </div>
                <div className="home__mobile">
                </div>
                <div className="home__content">
                    <div className="home__content-landing"
                        data-aos="zoom-out"
                        data-aos-delay="200">
                            <h1 className="title">Hi! My Name is Wei-Tong Tang and i am a:</h1>
                            <div className="text-wrapper">
                                <h1 className="text1">Software Developer.</h1>
                                <h1 className="text2">React Developer.</h1>
                                <h1 className="text3">JavaScript Developer.</h1>
                                <h1 className="text4">UX Designer.</h1>
                            </div>
                            <h1 className="end">I work to create the best looking designs with clear code.</h1>
                    </div>
                </div>
            </div>
            <UnderLand/>
        </>
    )
}

export default Home
