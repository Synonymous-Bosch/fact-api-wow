import React, {useEffect, useState} from 'react';
import Fact from '../components/Fact';
import FactButton from '../components/FactButton';
import FavouriteFacts from '../components/FavouriteFacts';

const FactBox = () => {

    const [factOfTheDay, setFactOfTheDay] = useState("")
    const [randomFact, setRandomFact] = useState("")
    const [favouriteFacts, setFavouriteFacts] = useState([])
    const [randomWow, setRandomWow] = useState("")


    const getFactOfTheDay = () => {
      fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
      .then(response => response.json())
      .then(factData => setFactOfTheDay(factData))
    }

    const getRandomFact = () => {
      fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
      .then(response => response.json())
      .then(factData =>setRandomFact(factData))
    }

    const getRandomWow = () => {
      fetch("https://owen-wilson-wow-api.onrender.com/wows/random")
      .then(response => response.json())
      .then(wowData => setRandomWow(wowData))
    }

    useEffect(() => {
      getFactOfTheDay();
      getRandomFact()
      getRandomWow();
    }, [])

    const contains = favouriteFacts.some((fact) => 
      {return fact.id === randomFact.id}
    )


    const addFavouriteFact = (fact) => {
        const list = [...favouriteFacts];
        if (!contains) {
            list.push(fact);
            setFavouriteFacts(list);
        }
    }



    return(
        <>
            <Fact factOfTheDay={factOfTheDay}/>
            <FactButton getRandomFact={getRandomFact} randomFact={randomFact} randomWow={randomWow} getRandomWow={getRandomWow}/>
            <FavouriteFacts favouriteFacts={favouriteFacts} setFavouriteFacts={addFavouriteFact} randomFact={randomFact} />
        </>
    )
}

export default FactBox;