import React, {useState} from 'react'
import './nav.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SoftwarePop from '../popOuts/software/software'
import AboutPop from '../popOuts/about/about';

const Nav = () => {
    const [softState, setSoftState] = useState(false);
    const [aboutState, setAboutState] = useState(false);

    const toggleSofwarePop = () => {
        setSoftState(!softState);
    }
    const toggleAboutPop = () => {
        setAboutState(!aboutState);
    }


    return (
        <div className="nav">
            <div className="nav__home">
                Home
            </div>
            <div className="nav__software" onClick={toggleSofwarePop}>
                Software Portfolio
            </div>
            <div className="nav__ux">
                UX Design Portfolio
            </div>
            <div className="nav__about" onClick={toggleAboutPop}>
                About
            </div>
            <div className={softState ? "softwareOn":"softwareOff"}>
                <SoftwarePop toggleSofwarePop={toggleSofwarePop}/>
            </div>
            <div className={aboutState ? "aboutOn":"aboutOff"}>
                <AboutPop toggleAboutPop={toggleAboutPop}/>
            </div>
        </div>
    )
}

export default Nav
