import React from "react";
import { useState } from "react";
import './Login.css';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="Email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="Password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="Password" placeholder="****" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn">Don't have an account? Register here.</button>
        </div>
    )
}
export default Login;