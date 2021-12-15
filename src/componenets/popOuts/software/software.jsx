import React from 'react';
import './software.scss';
import Card from '../../card/Card';
import portItems from '../../../jses/portfolioItems';
import 'aos/dist/aos.css';
import CloseIcon from '@material-ui/icons/Close';

const software = ({toggleSofwarePop}) => {

    const card = portItems.map((portItem)=> {
        return <Card
            gHubUrl={portItem.gHubUrl} 
            cardId={portItem.cardId} 
            backgroundImagePath={portItem.backgroundImagePath}
            title={portItem.title}
            description={portItem.description}
        />
    })

    return (
        <div className="software">
            <div className="software__top">
                <h1>Software Portfolio</h1>
                <CloseIcon className="close" onClick={toggleSofwarePop}/>
            </div>
            <div className="software__content">
                {card}
            </div>
        </div>
    )
}

export default software
