import React from 'react'
import './underLand.scss'
import DP from '../../assets/images/dp.jpg'
import Bootstrap from '../../assets/images/bootstrap.png';
import CSS from '../../assets/images/css3.png';
import Github from '../../assets/images/github.png';
import Google from '../../assets/images/google.png';
import HTML from '../../assets/images/html5.png';
import Java from '../../assets/images/java-icon.png';
import JS from '../../assets/images/javascript.png';
import Jest from '../../assets/images/jest.png';
import MySQL from '../../assets/images/mysql.png';
import JSX from '../../assets/images/react-icon.png';
import Sass from '../../assets/images/sass.png';
import Spring from '../../assets/images/spring.png';

const UnderLand = () => {
    return (
        <div className="under">
            <div className="under__row1">
                <div className ="under__row1-content">
                    <div className="under__row1-content-left">
                        <img src={DP} alt={DP} />
                    </div>
                    <div className="under__row1-content-right">
                        <p>
                            I'm a London based software developer passionate about working in tech. I completed the intensive _nology
                            12 week software development course on 22<sup>nd</sup> October 2021.
                        </p>
                        <p>
                            I attended Swansea university to read War and Society where I received a 2:1.
                        </p>
                        <p>
                            I like staying active having competed in amateur boxing bouts. I have also gained a blue blue in Brazilian Jiujitsu
                        </p>
                    </div>
                </div>
            </div>
            <div className="under__row2">
                <div className="under__row2-content2">
                    <p>Current Technologies:</p>
                    <div className="icon">
                        <img className="icons html " src={HTML} alt="" data-aos="flip-left" data-aos-delay="400"/>
                        <img className="icons css " src={CSS} alt="" data-aos="flip-left" data-aos-delay="500"/>
                        <img className="icons js " src={JS} alt="" data-aos="flip-left" data-aos-delay="600"/>
                        <img className="icons sass " src={Sass} alt="" data-aos="flip-left" data-aos-delay="700"/>
                        <img className="icons google " src={Google} alt="" data-aos="flip-left" data-aos-delay="800"/>
                        <img className="icons bootstrap " src={Bootstrap} alt="" data-aos="flip-left" data-aos-delay="900"/>
                        <img className="icons jest " src={Jest} alt="" data-aos="flip-right" data-aos-delay="1500" />
                        <img className="icons sql " src={MySQL} alt="" data-aos="flip-right" data-aos-delay="1400" />
                        <img className="icons gh " src={Github} alt="" data-aos="flip-right" data-aos-delay="1300" />
                        <img className="icons java " src={Java} alt="" data-aos="flip-right" data-aos-delay="1200" />
                        <img className="icons jsx " src={JSX} alt="" data-aos="flip-right" data-aos-delay="1100" />
                        <img className="icons spring " src={Spring} alt="" data-aos="flip-right" data-aos-delay="1000" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnderLand
