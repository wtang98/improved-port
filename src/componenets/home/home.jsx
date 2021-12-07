import React from 'react'
import './home.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../nav/nav';

const Home = () => {
    AOS.init();

    return (
        <div className="home">
            <div className="home__content">
                <div className="home__content-landing"
                    data-aos="zoom-out"
                    data-aos-delay="200">
                        <h1 className="title">Hi! My Name is Wei-Tong Tang and i am a:</h1>
                        <div className="text-wrapper">
                            <div className="text1">Software Developer</div>
                            <div className="text2">React Developer</div>
                            <div className="text3">JavaScript Developer</div>
                            <div className="text4">UX Designer</div>
                        </div>
                    {/* <h1 className="end">Developer</h1> */}
                </div>
            </div>
            <Nav/>
        </div>
    )
}

export default Home
