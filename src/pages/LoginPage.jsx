import React from 'react';
import { useNavigate } from 'react-router-dom';
import Design from "../components/Design";

const LoginPage = () => {
    const navigate = useNavigate(); // Use the correct hook

    const goto = () => {
        navigate('/register'); // Use navigate to navigate to the login page
    };

    const goBack = () => {
        navigate(-1); // Use navigate with -1 to navigate back
    };
    return(
        <div className="desktopUpperLog">
            <div className="desktopBackLog">
                <button onClick={goBack}>
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
            </div>
            <div className="desktopFormLog">
                <div className="desktopWarapp">
                    <span className="logo">AMAS</span>
                    <span className="title">Login</span>
                    <form className="desktopFromField">
                        <input type='text' name='username' id="username" placeholder='Username' />
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <button className="Login">Log In</button>
                        <p>You don't have an account? <span onClick={goto} className="goto">Register</span></p>
                    </form>
                </div>
            </div>
            <Design />
        </div>

    );
}

export default LoginPage;