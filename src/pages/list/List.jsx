import "../list/List.scss";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import DataTable from "../../components/dataTable/DataTable.jsx";
import { Link } from "react-router-dom";

const List = ({page})=> {

    return (
        <div className="list1">
            <div className="sidebar">
                <Sidebar className="sidebar"/>
            </div>
            <div className="list-container">
                <Navbar className="navbar"/>
                <div className="heading">    
                    {
                        page==="users"
                        ? <div className="ttl">Add new User</div>
                        : <div className="ttl">Add new Product</div>
                    }
                    {/* <div className="ttl">Add new {page==="users" && <>User</>}{page==="products" && <>Product</>}</div> */}
                    <Link to={`/${page}/new`} style={{textDecoration: "none"}}>
                        <div className="ttlbtn">Add new</div> 
                    </Link> 
                </div>
                <div className="container">
                {
                    page==="users"
                    ? <DataTable page={"users"} />
                    : <DataTable page={"products"} />
                }
                </div>
            </div>
        </div>
    );

};

export default List;