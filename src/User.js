import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


 const User = () => {
    const { id } = useParams();
  
    const[ usrdata, setusrdata ] = useState({})
    

    useEffect(()=> {
        fetch("http://localhost:8000/users/" + id).then((res) => {
            return res.json();
           }).then((resp)=>{
               setusrdata(resp);
        }).catch((err) => {
            console.log(err.message);
           })
        }, []);

    return (
    <div>
        <div className="container">
                
        <div className="card row" style={{ "textAlign": "left" }}>
            <div className="card-title">
                <h2>Usuarios</h2>
            </div>
            <div className="card-body"></div>
            { usrdata &&
                <div>
                    <h1>{`El usuario es :  ${usrdata.name }`}</h1>

                    <h5>Edad: { usrdata.edad }</h5>
                    <h5>Id: { usrdata.id }</h5>
                    <Link className="btn btn-danger" to="/">Back to Listing</Link>
                </div>
            }
        </div>
        </div>
    </div >
  );
}

export default User;