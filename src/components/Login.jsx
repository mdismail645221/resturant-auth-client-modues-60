import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthProvider } from '../contexts/UseContext';

const Login = () => {

    const [isDisable, SetDisable] = useState(true)
    const [error, SetError] = useState(null)

    const { signIn } = useContext(AuthProvider);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(form, email, password)
        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast("Successfully Login");
                form.reset()
                return <Navigate to='/'></Navigate>
            })
            .catch(error => {
                const errorCode = error;
                const errorMessage = error.message;
                SetError(errorMessage)
        })

        
    }



    return (
        <div className='w-50 mx-auto my-5 border p-3 shadow-lg rounded border-primary'>
            <h3 className='text-center my-3 fw-bold text-primary'>Login</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    <Form.Text>
                        <h5 className='text-danger my-3'>{error}</h5>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group  className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=> SetDisable(!isDisable)} type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={isDisable}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;