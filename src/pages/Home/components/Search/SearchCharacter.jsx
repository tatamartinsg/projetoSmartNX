import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


import './searchCharacter.css'
import { useState } from 'react';

function SearchCharacter(props) {
    const [input, setInput] = useState("")
    let i = 0

    const filterCharacters = props.somProp.map((row) => (
        {
            id: i+=1,
            nameCharacter: row.name,
            birthYear: row.birth_year,
            gender: row.gender,
            height: row.height,
            hairColor: row.hair_color,
            eyeColor:row.eye_color,
            skinColor: row.skin_color
        }
     ))

    const inputLowerCase = input.toLowerCase()
    const filterCharacters2 = filterCharacters.filter( (team) => 
        team.nameCharacter.toLowerCase().includes(inputLowerCase)
    )

    return(
        <section>
            <div className="div-search">
                <input className="input-search" type="text" name="nameCharacter"
                    value={input}
                    onChange={(e) => {setInput(e.target.value)}}  
                />
                <SearchIcon className="icon-search" />  
            </div>

            <ul>
                {
                    input.length > 0 && filterCharacters2.map((i) =>( 
                        <li key={i.nameCharacter}>{i.nameCharacter}</li>
                    ))
                }
                
            </ul>
        
        </section>

            
    )
}

export default SearchCharacter