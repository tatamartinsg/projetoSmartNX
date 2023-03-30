import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import './listCharacter.css'
  
function ListCharacter(props) {
    let i = 0
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
          editable: true,
        },
        {
            field: 'gender',
            headerName: 'Gênero',
            width: 200,
            editable: true,
        },
        {
            field: 'height',
            headerName: 'Altura',
            width: 150,
            editable: true,
        },
        {
            field: 'hairColor',
            headerName: 'Cor do Cabelo',
            width: 200,
            editable: true,
        },
        {
            field: 'eyeColor',
            headerName: 'Cor dos Olhos',
            width: 200,
            editable: true,
        },
        {
            field: 'skinColor',
            headerName: 'Cor da Pele',
            width: 200,
            editable: true,
        }
      ];
      

     const rows = props.somProp.map((row) => (
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


    return(

        <div className="div-listCharacter">
            {console.log(props.somProp)}

            <Box sx={{ 
                height: 400, width: '100%', background: '#1D1D1D' ,
            }}>
                <DataGrid
                    sx={{
                        border: 2,
                        '& .MuiDataGrid-cell:hover': {
                          color: 'primary.main',
                        },
                    }}
                    className="dataGrid-listCharacter"
                    rows={rows}
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
            {/* <ul>
                {props.somProp.map(item => console.log(item))}
            </ul> */}

        </div>
    )
}

export default ListCharacter