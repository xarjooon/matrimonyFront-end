import React from 'react';
import AuthImage from '../Assets/Group.1.png';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { LuPhoneCall } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";

const BASE_URL = 'http://localhost:4000';

function Home() {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh", width: "100%" }}>
            <div className='w-75 container'>
                <div className='card bg-light p-5'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-6'>
                            <img src={AuthImage} alt="Auth" width={"100%"} />
                        </div>
                        <div className='col-lg-6 col-md-6'>
                            <div className='d-flex align-items-center flex-column'>
                                <h2></h2>
                                <h5 style={{ fontFamily: "monospace", fontWeight: "bold" }}>
                                    Let's Meet New People Around You
                                </h5>
                                <Form>
                                    <Form.Group>
                                        <Button
                                            variant="custom"
                                            className="d-flex align-items-center justify-content-center py-2 px-3 rounded-pill"
                                            style={{
                                                backgroundColor: '#4B0082',
                                                color: 'white',
                                                border: 'none',
                                                width: '250px'
                                            }}
                                        >
                                            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-2"
                                                style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                                                <LuPhoneCall size={18} color="#4B0082" />
                                            </div>
                                            <span>Login with Email/Phone</span>
                                        </Button>
                                    </Form.Group>
                                    <Form.Group md="4" controlId="validationCustom01" className='mt-3'>
                                        <Button
                                            href={`${BASE_URL}/auth/google`}
                                            variant="custom"
                                            className="d-flex align-items-center justify-content-center py-2 px-3 rounded-pill"
                                            style={{
                                                backgroundColor: "pink",
                                                color: 'white',
                                                border: 'none',
                                                width: '250px'
                                            }}
                                        >
                                            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-4"
                                                style={{ width: '32px', height: '32px', minWidth: '32px' }}>
                                                <FcGoogle size={20} color="#4B0082" />
                                            </div>
                                            <span className='me-3'>Login with Google</span>
                                        </Button>
                                    </Form.Group>
                                </Form>
                                <div>
                                    <p className='mt-3' style={{ fontFamily: "sans-serif" }}>
                                        Don't Have an Account? <Link style={{ color: "pink" }} to='/register'>Sign Up</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
