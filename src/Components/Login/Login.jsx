import React, { useState, useContext } from 'react';
import './Login.css'; // Import the CSS file
import { FaRegUser } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { setIsLoggedIn, setEmail } = useContext(AuthContext); // Access setIsLoggedIn and setemail from AuthContext
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginPayload = {
            emailId: formData.email,
            password: formData.password,
        };

        try {
            const response = await fetch('http://localhost:3000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginPayload),
            });

            const responseData = await response.json();

            if (response.ok) {
                setIsLoggedIn(true); // Set isLoggedIn to true
                setEmail(formData.email); // Set email
                localStorage.setItem('token', responseData.token); // Store the token in localStorage
                alert('Login successful!');
                history.push('/profile'); // Redirect to profile or another page
            } else {
                alert(responseData.message || 'Invalid credentials');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                {/* <div className="profile-icon-container">
                    <FaRegUser className="profile-icon1" />
                </div> */}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Id"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;