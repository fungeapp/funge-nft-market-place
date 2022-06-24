import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import axios from 'axios'

const CoinMarket = () => {

    const [id, setrank] = useState();
    const [name, setname] = useState();
    const [rows, setrows] = useState([])


    const baseURL = `https://api.coinmarketcap.com/data-api/v3/nft/collections?start=0&limit=10&sort=volume&desc=true`;

    const columns = [
        {field:'id', headerName:'ID', width:70},
        {field: 'name', headerName: 'Name', width: 70 },
        {field: 'volume', headerName: 'Volume', width: 70},
        {field: 'volumeChangePercentage', headerName: 'Volume Change', width:70}
    ]
    /*const rows = [
        {id: 1, name:'my collection'},
        {id: 2, name:'my collection'},
        {id: 3, name:'my collection'}
    ];*/

    useEffect(() => {
        axios.get(baseURL)
        .then(response => {
            let collections = response.data.data.collections;
            let counter = 1;
            collections.map(item => {
                let index = counter++
                setrows(`{ id:${index}, name:${item.name}, volume:${item.oneDay.volume}, volumeChangePercentage:${item.volumeChangePercentage} }`)
                console.log(`{ id:${index}, name:${item.name}, volume:${item.oneDay.volume}, volumeChangePercentage:${item.volumeChangePercentage} }`)
            })
            
            
        })
    },[rows])

    return(
        <div style={{ height: 400, width: '100%' }}>
            getRowId={(row) => row._id}
            <DataGrid
                rows={rows}
                columns={columns}
                getRowId={(row) => row.no}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );

}

export default CoinMarket;