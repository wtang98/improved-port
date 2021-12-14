import React from 'react';
import './ux.scss';
import Card from '../../card/Card';
// import portItems from '../../../jses/portfolioItems';
import CloseIcon from '@material-ui/icons/Close';

const UX = ({toggleUxPop}) => {

    // const card = portItems.map((portItem)=> {
    //     return <Card
    //     gHubUrl={portItem.gHubUrl} 
    //     cardId={portItem.cardId} 
    //     backgroundImagePath={portItem.backgroundImagePath}
    //     title={portItem.title}
    //     description={portItem.description}
    //     />
    // })

    return (
        <div className="ux">
            <div className="ux__top">
                <h1>UX design Portfolio</h1>
                <CloseIcon className="ux__top-close" onClick={toggleUxPop}/>
            </div>
            <div className="ux__content">  
                <p>Work Coming soon...</p>
            </div>
        </div>
    )
}

export default UX
