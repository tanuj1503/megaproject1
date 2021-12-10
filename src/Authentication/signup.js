import React from 'react';
import { useState, useEffect}  from 'react';
import two from "../images/two.png";
import four from '../images/four.jpg';
import "./signup.css";
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import validation from './validation';

function Signup() {

    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        rePassword: "",
        date: "",
        address: "",
        select: ""
    })

    const [errors, setErrors] = useState({});
    const [submit, setSubmit] = useState(false);

    const handlechange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        console.log("user", user);
        setUser({ ...user, [name]: value })
    }


    const register = (e) => {
        e.preventDefault();
        setErrors(validation(user));
        setSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && submit){
            Axios.post("http://localhost:3001/register", user)
                .then((res) => {
                    alert(res.data.message);
                    history.push("/login");
                });
        }
    }, [errors]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container1'>
            <div className='signup-container'>
                <div className="form-container">
                    <img src={two} className="meditation" alt="meditation" />
                    <form onSubmit={register}>
                        <div className="input-box">
                            <input name="name" onChange={handlechange} type='text' placeholder='Patient name' />
                            {errors.name && <span>{errors.name}</span>}
                        </div>
                        <div className="input-box">
                            <input name="email" onChange={handlechange} type='text' placeholder='Enter your email' />
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className="input-box">
                            <input name="password" onChange={handlechange} type='password' placeholder='Password' />
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <div className="input-box">
                            <input name="rePassword" onChange={handlechange} type='password' placeholder='Re-enter Password' />
                            {errors.rePassword && <span>{errors.rePassword}</span>}
                        </div>
                        <div className="input-box">
                            <input name="date" value={user.date} onChange={handlechange} type='date' />
                            {errors.date && <span>{errors.date}</span>}
                        </div>
                        <div className="input-box">
                            <input name="address" value={user.address} onChange={handlechange} type='text' placeholder='Address' />
                            {errors.address && <span>{errors.address}</span>}
                        </div>
                        <div className="input-box">
                            <select name="select" value={user.select} onChange={handlechange} placeholder="">
                                <option>Why are you here for?</option>
                                <option value="back pain">back Pain</option>
                                <option value="joint pain">Joint Pain</option>
                                <option value="paralysis">Paralysis</option>
                                <option value="artritis">Arthiritis</option>
                                <option value="Muscular pain">Muscular Pain</option>
                            </select>
                            {errors.select && <span>{errors.select}</span>}
                        </div>
                        <button type="submit">Register</button>
                        <p className="or">OR</p>
                        <Link to="/login"> <button>Sign in </button></Link>
                    </form>
                </div>
                <h1 className='slogan'>COMMITED FOR BEST PHYSIOTHERAPHY TREATMENT</h1>
            </div>
            <div className="address">
                <p className="location">Rathi House, New Professor Colony, Ballarpur, Ballarpur - 442701, Rejuvenation Center. Phone : 07947286268</p>
            </div>
            <img className='doc-pointing' src={four} alt="male-doctor" />
        </div>
    )
}

export default Signup;
