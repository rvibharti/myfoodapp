import React from 'react';
import { Link } from 'react-router-dom';


function Logout() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }} >
            <h2>Thanks for visiting!!</h2>
            <h3>checkedout</h3>
            <Link to="/login"><button className='check' >Login again</button></Link>

        </div>
    )
}

export default Logout;
