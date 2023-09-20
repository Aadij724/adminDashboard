import "../dataTable/DataTable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows, productRows } from "../../dataTableSource.js";
import { Link } from "react-router-dom";
import { useState } from "react";


const DataTable = ({page})=> {

    const [data, setData] = useState( page==="users" ? userRows : productRows );

    const handleClick = (id)=>{
        setData( data.filter((d)=>{
            if(d.id!==id) 
                return d;
        }) );
    }

    const actionColumn = {
        field: "action", 
        headerName: "Action", 
        width: 180, 
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${page}/${params.row.id}`} style={{textDecoration: "none"}}>
                        <div className="view">View</div>
                    </Link>
                    <div className="delete" onClick={()=>handleClick(params.row.id)}>Delete</div>    
                </div>
            )
        },
    };
    
    const columns = userColumns.concat(actionColumn);

    return (
        <DataGrid className="datatable"
            rows={data}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
            }}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
        />
    )
};

export default DataTable;