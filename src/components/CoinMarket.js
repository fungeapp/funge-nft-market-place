import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useHistory, useState } from 'react';
import env from 'react-dotenv';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const CoinMarket = () => {

    const [rank, setrank] = useState();
    const [name, setname] = useState();


    const baseURL = `https://api.coinmarketcap.com/data-api/v3/nft/collections?start=0&limit=10&sort=volume&desc=true`;

    const columns = [
        {field:'id', headerName:'Rank', width:70},
        { field: 'name', headerName: 'Name', width: 70 },
    ]
    const rows = [
        {id: 1, name:'my collection'},
        {id: 2, name:'my collection'},
        {id: 3, name:'my collection'}
    ];

    return(
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            
            />
        </div>
    );

}

export default CoinMarket;