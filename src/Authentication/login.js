import React, { useState, useEffect } from 'react';
import "./login.css";
import two from "../images/two.png";
import six from '../images/six.jpg';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

function Login({ setLoginuser }) {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const validation = (user) => {
        let errors = {};
        const { email, password } = user;
        
        if (email === "") {
            errors.email = "** email required"
        } else if (email.indexOf('@') <= 0) {
            errors.email = "** @ at invalid position"
        } else if ((email.charAt(email.length - 4) !== '.') && (email.charAt(email.length - 3) !== '.')) {
            errors.email = "** '.' at invalid position"
        }

        if (password === "") {
            errors.password = "** password is required"
        } else if (password.length < 8 || password.length > 20) {
            errors.password = "** password length must be greater than 8"
        }
        return errors
    }

    const handlechnage = (e) => {
        const { name, value } = e.target;
        // console.log("user", user);
        setUser({ ...user, [name]: value });
    }

    const login = (e) => {
        e.preventDefault();
        setErrors(validation(user));
        setSubmit(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submit) {
             Axios.post("http://localhost:3001/login", user)
                .then((res) => {
                    const data = res.data.user;
                    localStorage.setItem("userInfo", JSON.stringify(data));
                    alert(res.data.message);
                    setLoginuser(data);
                    history.push("/")
                })
        }
    }, [errors]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className='container2'>
                <div className='login-container'>
                    <div className="form-container">
                        <img src={two} alt="meditation" />
                        <form>
                            <div className="input-box">
                                <input name="email" value={user.email} onChange={handlechnage} type='text' placeholder='Enter your email' />
                                {errors.email && <span>{errors.email}</span>}
                            </div>
                            <div className="input-box">
                                <input name="password" value={user.password} onChange={handlechnage} type='password' placeholder='Password' />
                                {errors.password && <span>{errors.password}</span>}
                            </div>
                            <button onClick={login}>Login</button>
                            <p className="or">OR</p>
                            <Link to="/signup"><button>Sign up</button></Link>
                        </form>
                    </div>
                    <h1 className='slogan'>COMMITED FOR BEST PHYSIOTHERAPHY TREATMENT</h1>
                </div>
                <div className="address">
                    <p className="location">Rathi House, New Professor Colony, Ballarpur, Ballarpur - 442701, Rejuvenation Center. Phone : 07947286268</p>
                </div>
                <img className='doc-pointing' src={six} alt="female-doctor" />
            </div>
        </div>
    )
}

export default Login;
