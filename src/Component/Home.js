import React from 'react';
import { Link } from 'react-router-dom';




function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <h2>Welcome to Food's-App</h2>
            <Link to='/login'><button>log-in</button></Link>
        </div>
    )
}

export default Home;
