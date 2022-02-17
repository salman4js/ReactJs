import React from 'react'

const Body = (props) => {
    return (
        <div className = "container">
            <div className="header-wrapper">
            <div className='row'>
                <div className="column1">
                    <img className='img-fluid' src = {props.image} alt = ""/>
                </div>
                <div className="column">
                    <p className = "b-title">
                       Title..
                    </p>
                    <p>
                        {props.title}
                    </p>
                    <p className = "b-title">
                        Description
                    </p>
                    <p>
                        {props.description}
                    </p>
                    <p className = "b-title">
                        Content
                    </p>
                    <p>
                        {props.content}
                    </p>
                    <p className='b-publish'>
                        Published At..
                    </p>
                    <p>
                        {props.published}
                    </p>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Body