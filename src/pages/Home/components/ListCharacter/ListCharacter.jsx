import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import './listCharacter.css'
import SearchIcon from '@mui/icons-material/Search';

function ListCharacter(props) {
    let i = 0 //é o valor do id dos personagens e será incrimentado a cada personagem
    //precisa do valor do id, pois o dataGrid exige um valor de id
    const [input, setInput] = useState("")
    
    const columns = [
        {
          field: 'nameCharacter',
          headerName: 'Nome',
          width: 200,
        },
        {
          field: 'birthYear',
          headerName: 'Ano de Nascimento',
          width: 200,
        },
        {
            field: 'gender',
            headerName: 'Gênero',
            width: 200,

        },
        {
            field: 'height',
            headerName: 'Altura',
            width: 150,

        },
        {
            field: 'hairColor',
            headerName: 'Cor do Cabelo',
            width: 200,

        },
        {
            field: 'eyeColor',
            headerName: 'Cor dos Olhos',
            width: 150,

        },
        {
            field: 'skinColor',
            headerName: 'Cor da Pele',
            width: 150,

        }
      ];

     const row = props.charactersProp.map((row) => (
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
    
     //ao filtrar, primeiro, passa todos os caracteres para letra minúscula
     //desse modo, consegue filtrar todos os personagens
     const inputLowerCase = input.toLowerCase()
     const filterCharacters = row.filter( (team) => 
         team.nameCharacter.toLowerCase().includes(inputLowerCase)
     )
 
    return(
        <section>
            <div className="div-search">
                <input className="input-search" type="text" 
                    name="nameCharacter"
                    placeholder="Busque pelo nome"
                    value={input}
                    onChange={(e) => {setInput(e.target.value)}} 
                />
                <SearchIcon className="icon-search" />  
            </div>
            <div className="div-listCharacter">

                <Box 
                    sx={{ 
                        height: 400, width: '100%'  
                    }}
                >
                    <DataGrid
                        sx={{
                            border: 2,
                            '& .MuiDataGrid-cell:hover': {
                            color:'primary.light' ,
                            },
                            color:'white'                      
                        }}
                        className="dataGrid-listCharacter"
                        rows={filterCharacters}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10,
                                },
                            },
                        }}                               
                    />
                </Box>
            </div>
        </section>
    )
}

export default ListCharacter