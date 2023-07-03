import React from 'react'

const Fact = ({factOfTheDay}) => {
    return (
    <>
        <h2>Fact Of The Day</h2>
        <p>Fact: {factOfTheDay.text}</p>    
        
    </>
    )
}

export default Fact;