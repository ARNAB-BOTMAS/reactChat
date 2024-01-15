import React from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation from '../animation/add.json'
import Design from '../components/Design';


const RegisterPage = () =>{
    const navigate = useNavigate(); // Use the correct hook

    const goto = () => {
        navigate('/login'); // Use navigate to navigate to the login page
    };

    const goBack = () => {
        navigate(-1); // Use navigate with -1 to navigate back
    };

    return(
        <div className="desktopUpperReg">
            <div className="desktopBackReg">
                <button onClick={goBack}>
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
            </div>
            <div className="desktopFormReg">
                <div className="desktopWarapp">
                    <span className="logo">AMAS</span>
                    <span className="title">Register</span>
                    <form className="desktopFromField">
                        <input type='text' name='username' id="username" placeholder='Username' />
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <input type="email" name="email" id="email" placeholder='Email'/>
                        <input type="file" name="profilepic" id="profilepic" className="profilepic" />
                        <label htmlFor="profilepic">
                            <Lottie loop={true} animationData={animation} className='desktop-profile'/>
                            Add Profile Picture
                        </label>
                        <button className="register">Sign Out</button>
                        <p>You do have an account? <span onClick={goto} className='goto'>Login</span></p>
                    </form>
                </div>
            </div>
            <Design />
        </div>
    );
}

export default RegisterPage;