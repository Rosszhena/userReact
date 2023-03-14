import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


 const User = () => {
    const { id } = useParams();

    const[ data, setusrdata ]=useState({})

    useEffect(()=> {
        fetch("http://localhost:8000/users").then((res)=>{
            return res.json();
           }).then((resp)=>{
               setusrdata(resp);
        }).catch((err) => {
            console.log(err.message);
           })
        }, [])

    return (
    <div>
        <div className="container">
                
        <div className="card row" style={{ "textAlign": "left" }}>
            <div className="card-title">
                <h2>Employee Create</h2>
            </div>
            <div className="card-body"></div>
            {data &&
                <div>
                    <h1>El usuario es : {data.name}({data.id})</h1>
                    <h3>Contact Details</h3>
                    <h5>Email is : {data.edad}</h5>
                    <h5>Phone is : {data.id}</h5>
                    <Link className="btn btn-danger" to="/">Back to Listing</Link>
                </div>
            }
        </div>
        </div>
    </div >
  );
}

export default User;