import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function LandingPage() {

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default LandingPage;
// const history = useHistory();

//     const back = () => {
//         history.push("/Login")
//     }

//     return (
//         <div className="home-container">
//             <div className="buttons">
//                 <Link to="/login"><button>Sign in</button></Link>
//                 <Link to="/signup"><button>Signup</button></Link>
//             </div>
//             <h1>Home Page</h1>
//             <div className="home">
//                 <button className="logout" onClick={back}>Logout</button>
//             </div>
//         </div>
//     )


