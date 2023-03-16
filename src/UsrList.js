import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

 const UsrList = () => {
     const[usrdata, setusrdata] = useState(null);
     const navigate=useNavigate();

    const LoadDetails = (id) => {
        //console.log(id)
        navigate("/user/" + id);

    }

    const RemoveUser = (id) => {

    }

     useEffect(() => {
         fetch("http://localhost:8000/users").then((res) => {
             return res.json();
            }).then((resp)=>{
                setusrdata(resp);
         }).catch((err) => {
             console.log(err.message);
            })
         }, []);

    
  return (
    <div className="container">
        <div className="card">
            <div className="card-title">
                <h2>Users</h2>
            </div>
            <div className="card-body">
                <Link>Add New (+)</Link>
            </div>
                <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>ID</td>
                            <td>name</td>
                            <td>edad</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {usrdata &&
                            usrdata.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.edad}</td>
                                    <td><a className="btn btn-success">Edit</a>
                                        <a onClick={() => { RemoveUser(item.id) }} className="btn btn-danger">Remove</a>
                                        <a onClick={() => { LoadDetails(item.id) }} className="btn btn-primary">Details</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  );
}

export default UsrList;