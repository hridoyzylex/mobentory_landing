import React from 'react'

function FeatureBox(props) {
    return (
        <div className='a-box'>
            <div className="a-b-img">
                <img src={props.image} alt='Feature Box' />

            </div>

            <div className="s-b-text">
                <h2>{props.title}</h2>
                <p>{props.description} </p>
            </div>







        </div>
    )
}

export default FeatureBox