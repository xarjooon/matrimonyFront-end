import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { GrGallery } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";

function PersonalDetails() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='container d-flex justify-content-center align-items-center'>
                    <div className='card bg-light p-4 w-25' style={{ minWidth: "300px", maxWidth: "500px" }}>
                        <div>
                            <h4 className='text-center mb-4'>
                                Personal Details
                            </h4>
                            <Form>
                                <>
                                    <Form.Group controlId="validationCustom01" className="mb-3">
                                        <Form.Control type="text" placeholder="Age" />
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom02" className="mb-3">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom03" className="mb-3">
                                        <Form.Control type="number" placeholder="Hobbies" />
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom04" className="mb-3">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom05" className="mb-3">
                                        <Form.Control type="text" placeholder="Smoking Habits" />
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom06" className="mb-3">
                                        <Form.Control type="text" placeholder="Drinking Habits" />
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom07" className="mb-3">
                                        <Form.Control type="text" placeholder="Qualifications" />
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom08" className="mb-3">
                                        <div className="d-flex align-items-center">
                                            <Form.Control type="text" placeholder="Profile Pic" />
                                            <GrGallery className="ml-2" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom09" className="mb-3">
                                        <div className="d-flex align-items-center">
                                            <Form.Control type="text" placeholder="Add More Images" />
                                            <GrGallery className="ml-2" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="validationCustom10" className="mb-3">
                                        <div className="d-flex align-items-center">
                                            <Form.Control type="text" placeholder="Short Reel" />
                                            <IoVideocamOutline className="ml-2" />
                                        </div>
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button
                                            style={{ width: "250px", border: "none" }} className='btn btn-dark mt-3'>Next</Button>
                                    </div>
                                </>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PersonalDetails;
