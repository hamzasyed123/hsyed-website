import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { useState } from "react"
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import "reactjs-popup/dist/index.css";
import "../style/user.css"

function User() {
    const [data, setData] = useState([
        {
            id: '14141',
            username: 'John Smith',
            role: 'user',
            email: 'jsmith@gmail.com',
            dateCreated: new Date(),
            isSuspended: false
        },
        {
            id: '15151',
            username: 'Hamza Syed',
            role: 'user',
            email: 'hsyed@gmail.com',
            dateCreated: new Date(),
            isSuspended: false
        },
        {
            id: '21832',
            username: 'Hasan Huda',
            role: 'user',
            email: 'hhuda@gmail.com',
            dateCreated: new Date(),
            isSuspended: false
        }
    ])
    const gridApi = useGridApiRef();

    // useEffect(() => {
    //     function getUsers() {
    //         axios.get("http://localhost:3000/user")
    //         .then((response) => {
    //             setUsers(response.data)
    //         })
    //         .catch(error => console.error(error))
    //     }
    //     getUsers()
    // }, [])
    
    const rows = data.map(data => ({
        id: data.id,
        userIcon: "usericon.jpg",
        username: data.username,
        role: data.role,
        email: data.email,
        created: data.dateCreated.toDateString().slice(4, 15),
        isSuspended: data.isSuspended
    }))
    
    
    const columns = [
        {
            field: "userIcon",
            headerName: "Icon",
            width: 70,
            sortable: false,
            filterable: false,
            renderCell: (params) => <img className="data-grid-icon" alt="profile-pic" src={params.value} />
        },
        {
            field: "username",
            headerName: "Username",
            width: 240,
            renderCell: (params) => {
                return <Link to="myprofile">{params.value}{params.row.isSuspended && "(Suspended)"}</Link>
            }
        },
        {
            field: "role",
            headerName: "Role",
            width: 60,
            sortable: false
        },
        {
            field: "email",
            headerName: "Email",
            width: 250,
            sortable: false
        },
        {
            field: "created",
            headerName: "Created",
            width: 150,
            sortable: false
        },
        {
            field: "isSuspended",
            headerName: "Actions",
            width: 350,
            filterable: false,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div className="data-grid-actions">
                        <Popup trigger={<button disabled={params.value}>Suspend</button>} modal contentStyle={{
                            height: '15%',
                            width: '40%'
                        }}>
                            {close => (
                                <div className="user-action">
                                    <h3>Are you sure you want to suspend this user?</h3>
                                    <div className="button-column">
                                        <button onClick={() => {
                                            gridApi.current.updateRows([{ id: params.id, isSuspended: true }])
                                            alert("User has been suspended")
                                            close()
                                        }}>Yes</button>
                                        <button onClick={close}>No</button>
                                    </div>
                                </div>)}
                        </Popup>
                        <Popup trigger={<button disabled={!params.value}>Reactivate</button>} modal contentStyle={{
                            height: '15%',
                            width: '40%'
                        }}>
                            {close => (
                                <div className="user-action">
                                    <h3>Are you sure you want to reactivate this user?</h3>
                                    <div className="button-column">
                                        <button onClick={() => {
                                            gridApi.current.updateRows([{ id: params.id, isSuspended: false }])
                                            alert("User has been reactivated")
                                            close()
                                        }}>Yes</button>
                                        <button onClick={close}>No</button>
                                    </div>
                                </div>)}
                        </Popup>
                        <Popup trigger={<button className="delete-button">Delete</button>} modal contentStyle={{
                            height: '15%',
                            width: '40%'
                        }}>
                            {close => (
                                <div className="user-action">
                                    <h3>Are you sure you want to delete this user?</h3>
                                    <div className="button-column">
                                        <button onClick={() => {
                                            alert("User has been deleted")
                                            close()
                                        }}>Yes</button>
                                        <button onClick={close}>No</button>
                                    </div>
                                </div>)}
                        </Popup>
                    </div>)
            }
        }

    ]

    
    return (
        <div className="container">
            <h1 className="user-pagename">
                User Management Page
            </h1>
            <div className="user-container">
                <DataGrid rows={rows}
                    columns={columns}
                    apiRef={gridApi}
                    rowHeight={150}
                    pageSizeOptions={[5, 10, 25, 50, 100]}
                />
            </div>
        </div>
    )
}

export default User