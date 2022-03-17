import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 100,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    { field: 'id2', headerName: 'ID', width: 70 },
    { field: 'firstName2', headerName: 'First name', width: 150 },
    { field: 'lastName2', headerName: 'Last name', width: 150 },
    {
        field: 'age2',
        headerName: 'Age',
        type: 'number',
        width: 100,
    },
    {
        field: 'fullName2',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 200,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, id2: 1, lastName2: 'Snow', firstName2: 'Jon', age2: 35 },
];

const DataTable = () => {
    return (
        <div className="DataTable">
            <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    );
};
export default DataTable;
