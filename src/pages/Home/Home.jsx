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
        //consumindo várias páginas da api e concatenando os resultados
        //em uma única varíavel
        const response = await Character.getCharacter(1)
        const response2 = await Character.getCharacter(2)
        const response3 = await Character.getCharacter(3)
        const response4 = await Character.getCharacter(4)
        const response5 = await Character.getCharacter(5)
        const allResponses = response.results
                     .concat(response2.results)
                     .concat(response3.results)
                     .concat(response4.results)
                     .concat(response5.results)
        setCharacter(allResponses)
    }

    return(
        <main className="main">
            <h1 className="h1-list">Lista de Personagens</h1>
            <ListCharacter charactersProp={characters} />
        </main>
    )
}

export default Home