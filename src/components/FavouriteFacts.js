import React from 'react'

const FavouriteFacts = ({randomFact, setFavouriteFacts, favouriteFacts}) => {
  
    const handleFavouriteFacts = () => {
      setFavouriteFacts(randomFact);
    }

    const favFactNodes = favouriteFacts.map((fact) => {
        return (
            <li key={fact.id}>{fact.text}</li>
        )
    })
      
    

    return (
        <>        
        <button onClick={handleFavouriteFacts}>Add fact to favourites</button>
        <h1>Favourite Facts</h1>
        <ul>
            {favFactNodes}
        </ul>
        </>

    )

}

export default FavouriteFacts