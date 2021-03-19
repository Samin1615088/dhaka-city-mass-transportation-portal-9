import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SignIcon from '@material-ui/icons/ArrowForward';
import "./Login.css";
import { ButtonBase } from '@material-ui/core';

const Login = () => {
    //react-hook-form<
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    //react-hook-form<

    //login or create account>
    const [toggleLoginCreateLogin, setToggleLoginCreateLogin] = useState(false);
    //login or create account<


    return (
        <div>
            <h1>This is login page</h1>
            <Container className="d-flex flex-column justify-content-center w-50 bg-white p-4 rounded">
                {toggleLoginCreateLogin ?
                    (
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <h4>Login</h4>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    ref={register({
                                        required: 'EMAIL REQUIRED'
                                    })}
                                />
                                <Form.Text className="text-muted">
                                    {errors.email && errors.email.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    ref={register({
                                        required: "PASSWORD REQUIRED"
                                    })}
                                />
                                <Form.Text className="text-muted">
                                    {errors.password && errors.password.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" name="rememberMe" ref={register} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                </Button>
                            <Form.Text className="text-muted">
                                <p>Don't have an account ? <span onClick={() => setToggleLoginCreateLogin(!toggleLoginCreateLogin)} style={{ color: 'tomato', cursor: 'pointer' }}>{toggleLoginCreateLogin ? 'create an account' : 'login'}</span></p>
                            </Form.Text>
                        </Form>

                    )
                    :
                    (<Form className="w-50 bg-white p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
                        <h4>Create an account</h4>

                        {/* <Form.Group controlId="formBasicUsername">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            name="username"
                            ref={register({
                                required: "NAME REQUIRED"
                            })}
                        />
                        <Form.Text className="text-muted">
                            {errors.username && errors.username.message}
                        </Form.Text>
                    </Form.Group> */}

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                ref={register({
                                    required: 'EMAIL REQUIRED'
                                })}
                            />
                            <Form.Text className="text-muted">
                                {errors.email && errors.email.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                ref={register({
                                    required: "PASSWORD REQUIRED"
                                })}
                            />
                            <Form.Text className="text-muted">
                                {errors.password && errors.password.message}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" name="rememberMe" ref={register} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                        <Form.Text className="text-muted">
                            <p>Already have an account? <span onClick={() => setToggleLoginCreateLogin(!toggleLoginCreateLogin)} style={{ color: 'tomato', cursor: 'pointer' }}>{toggleLoginCreateLogin ? 'create an account' : 'login'}</span></p>
                        </Form.Text>
                    </Form>)
                }
                <ButtonBase><SignIcon></SignIcon> Continue with Google</ButtonBase>
            </Container >
        </div>
    );
};


export default Login;