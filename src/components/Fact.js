import React from 'react'

const Fact = ({factOfTheDay}) => {
    return (
    <>
        <h1>Fact Of The Day</h1>
        <p>Fact: {factOfTheDay.text}</p>    
        
    </>
    )
}

export default Fact;