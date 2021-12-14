import React, {useState} from 'react'
import './nav.scss'
import 'aos/dist/aos.css';
import SoftwarePop from '../popOuts/software/software'
import AboutPop from '../popOuts/contact/contact';
import UXPop from '../popOuts/uxDesign/ux'



const Nav = (props) => {
    const {href} = props
    const [softState, setSoftState] = useState(false);
    const [aboutState, setAboutState] = useState(false);
    const [uxState, setUxState] = useState(false);

    const toggleSofwarePop = () => {
        setSoftState(!softState);
    }
    const toggleAboutPop = () => {
        setAboutState(!aboutState);
    }
    const toggleUxPop = () => {
        setUxState(!uxState);
    }

    return (
        <div className="nav">
            {/* <div className="nav__home">
                Home
            </div> */}
            <div className="nav__software" onClick={toggleSofwarePop}>
                Software Portfolio
            </div>
            <div className="nav__ux" onClick={toggleUxPop}>
                UX Design Portfolio
            </div>
            <div className="nav__about" onClick={toggleAboutPop}>
                Contact
            </div>
            <div className={softState ? "softwareOn":"softwareOff"}>
                <SoftwarePop toggleSofwarePop={toggleSofwarePop}/>
            </div>
            <div className={aboutState ? "aboutOn":"aboutOff"}>
                <AboutPop toggleAboutPop={toggleAboutPop}/>
            </div>
            <div className={uxState ? "uxOn":"uxOff"}>
                <UXPop toggleUxPop={toggleUxPop}/>
            </div>
        </div>
    )
}

export default Nav
