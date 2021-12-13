import React from 'react'
import './Card.scss'

const Card = (props) => {
    const {gHubUrl, cardId, backgroundImagePath, description, title} = props

    return (
        <div className="portfolio__content">
            <div className="card">
                <a href={gHubUrl} target="_blank">
                    <input type="checkbox" id={cardId} className="more" aria-hidden="true"/>
                        <div className="content">
                            <div className="front"
                                style={{backgroundImage: `url(${backgroundImagePath})`}}>
                                <div className="inner">
                                    <h2 className="d-flex text-align-center">{title}</h2>
                                    <label for={cardId} className="button" aria-hidden="true">
                                        Details
                                    </label>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <div className="info">
                                    </div>
                                    <div className="description">
                                        <p>
                                            {description}
                                        </p>
                                    </div>
                                    <label for={cardId} className="button return" aria-hidden="true">
                                        <i className="fas fa-arrow-left">back</i>
                                    </label>
                                </div>
                            </div>
                        </div>
                </a>
            </div>
        </div>
    )
}

export default Card
