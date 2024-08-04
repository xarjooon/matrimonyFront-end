import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiRefreshCw } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../Services/allAPI';

function Auth({ register }) {
    const isRegisterForm = !!register;
    const navigate = useNavigate(); 
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        Mobile: "",
        Password: "",
        ConfirmPassword: ""
    });

    const handleRegister = async (e) => {
        e.preventDefault();
        const { Name, Email, Mobile, Password, ConfirmPassword } = userData;

        if (!Name || !Email || !Mobile || !Password || !ConfirmPassword) {
            toast.error("Please fill out the form completely.");
        } else if (Password !== ConfirmPassword) {
            toast.error("Passwords do not match.");
        } else {
            try {
                const result = await registerAPI(userData);

                if (result.status === 200) {
                    toast.success("User Registered Successfully");
                    setUserData({
                        Name: "",
                        Email: "",
                        Mobile: "",
                        Password: "",
                        ConfirmPassword: ""
                    });
                    navigate('/login');
                } else {
                    toast.error(result.response.data.message);
                }
            } catch (error) {
                toast.error("An error occurred during registration.");
            }
        }
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='container d-flex justify-content-center align-items-center'>
                    <div className='card bg-light p-4 w-25' style={{ minWidth: "300px", maxWidth: "500px" }}>
                        <div>
                            <h4 className='text-center mb-4'>
                                {isRegisterForm ? "Sign up" : "Login"}
                            </h4>
                            <Form>
                                {isRegisterForm && (
                                    <>
                                        <Form.Group controlId="validationCustom01">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control 
                                                value={userData.Name}
                                                onChange={(e) => setUserData({ ...userData, Name: e.target.value })}
                                                type="text" 
                                                placeholder="Name" 
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="validationCustom02">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control 
                                                value={userData.Email}
                                                onChange={(e) => setUserData({ ...userData, Email: e.target.value })}
                                                type="email" 
                                                placeholder="Email" 
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="validationCustom03">
                                            <Form.Label>Mobile</Form.Label>
                                            <Form.Control 
                                                value={userData.Mobile}
                                                onChange={(e) => setUserData({ ...userData, Mobile: e.target.value })}
                                                type="number" 
                                                placeholder="Mobile" 
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="validationCustom04">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control 
                                                value={userData.Password}
                                                onChange={(e) => setUserData({ ...userData, Password: e.target.value })}
                                                type="password" 
                                                placeholder="Password" 
                                            />
                                        </Form.Group>
                                        <Form.Group controlId="validationCustom05">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control 
                                                value={userData.ConfirmPassword}
                                                onChange={(e) => setUserData({ ...userData, ConfirmPassword: e.target.value })}
                                                type="password" 
                                                placeholder="Confirm Password" 
                                            />
                                        </Form.Group>
                                        <Link to="#" className='ms-2' style={{ color: "black" }}>
                                            Generate OTP <FiRefreshCw className='ms-2' /> <IoMdCheckmarkCircleOutline />
                                        </Link>
                                        <Form.Group controlId="validationCustom06">
                                            <Form.Label>OTP</Form.Label>
                                            <Form.Control type="text" placeholder="We sent a code to Email/phone" />
                                        </Form.Group>

                                        <div>
                                            <Button
                                                onClick={handleRegister}
                                                style={{ width: "250px", border: "none" }} className='btn btn-dark mt-3'>
                                                Register
                                            </Button>
                                            <Button 
                                                style={{ backgroundColor: '#4B0082', color: 'white', border: 'none', width: '250px' }} 
                                                className='btn mt-2'>
                                                Social media login
                                            </Button>
                                        </div>
                                    </>
                                )}

                                {!isRegisterForm && (
                                    <>
                                        <Form.Group controlId="validationCustom07">
                                            <Form.Label>Email/Mobile</Form.Label>
                                            <Form.Control type="text" placeholder="Email/Mobile" />
                                        </Form.Group>
                                        <Form.Group controlId="validationCustom08">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <div>
                                            <Link to='/personalDetails'> 
                                                <Button 
                                                    style={{ width: "250px", border: "none" }} 
                                                    className='btn btn-dark mt-3'>
                                                    Login
                                                </Button>
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </Form>

                            <div>
                                <p className='mt-2'>
                                    {isRegisterForm ? "Already have an Account? " : "Don't have an account? "}
                                    <Link to={isRegisterForm ? '/login' : '/register'}>
                                        {isRegisterForm ? "Login" : "Sign up"}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Auth;
