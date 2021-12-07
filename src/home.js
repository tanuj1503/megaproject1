import React, {useState, useEffect} from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Home() {

    const history = useHistory();

    const [data, setData] = useState([]);

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
        const userDetail = userInfo!==null ? JSON.parse(userInfo) : [];
        setData(userDetail);
        console.log("userInfo = ",userInfo);
        console.log("userDetail = ",userDetail.name);
    }, []);

    console.log("Data : ",data.name);

    const back = () => {
        history.push("/Login")
    }

    return (
        <div className="home-container">
        <div>welcome back {data.name}</div>
            <div className="buttons">
                <Link to="/login"><button>Sign in</button></Link>
                <Link to="/signup"><button>Signup</button></Link>
            </div>
            <h1>Home Page</h1>
            <div className="home">
                <button className="logout" onClick={back}>Logout</button>
            </div>
        </div>
    )
}

export default Home;
