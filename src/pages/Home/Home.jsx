import SearchCharacter from './components/Search/SearchCharacter'
import ListCharacter from './components/ListCharacter/ListCharacter';
import Character from '../../services/requisitions/Character'

import { useEffect, useState } from 'react';
import './home.css'

function Home() {
    const [characters, setCharacter] = useState([])

    useEffect(()=>{
        getCharacter()
    })

    const getCharacter = async () => {
        const response = await Character.getCharacter(1)
        const response2 = await Character.getCharacter(2)
        const response3 = await Character.getCharacter(3)
        const response4 = await Character.getCharacter(4)
        const response5 = await Character.getCharacter(5)
        const array = response.results
                     .concat(response2.results)
                     .concat(response3.results)
                     .concat(response4.results)
                     .concat(response5.results)
        setCharacter(array)
    }

    return(
        <main className="main">
            <h1 className="h1-list">Lista de Personagens</h1>
            <SearchCharacter somProp={characters} />
            <ListCharacter somProp={characters} />
        </main>
    )
}

export default Home