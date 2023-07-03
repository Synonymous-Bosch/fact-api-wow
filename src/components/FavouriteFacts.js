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
        <>        <button onClick={handleFavouriteFacts}>Add fact to favourites</button>
        <ul>
            {favFactNodes}
        </ul>
        </>

    )

}

export default FavouriteFacts