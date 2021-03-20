import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SignIcon from '@material-ui/icons/ArrowForward';
import "./Login.css";
import { ButtonBase } from '@material-ui/core';

//firebase>
import firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    // Initialize Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    //firebase<

    //private router redirect>
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log('location ',{from});
    //private router redirect<

    //USER CONTEXT data receiving using context>
    const [userStatus, setUserStatus] = useContext(UserContext);
    //USER CONTEXT data receiving using context<

    //react-hook-form<
    const { register, handleSubmit, errors } = useForm();
    const [formData, setFormData] = useState({});

    const onSubmit = (data) => {
        setFormData(data);
        console.log('formData in useState', formData);
        // const currentUserInput = {...userStatus};
        // currentUserInput.email = data.email;
        // currentUserInput.password = data.password;

        toggleLoginCreateLogin ?
            handleLogInWithEmailPassword(data.email, data.password) :
            handleSignInWithEmailPassword(data.email, data.password);
    }
    //react-hook-form<

    //login or create account>
    const [toggleLoginCreateLogin, setToggleLoginCreateLogin] = useState(false);
    //login or create account<

    //firebase create with email>
    const handleSignInWithEmailPassword = (dataEmail, dataPassword) => {
        firebase.auth().createUserWithEmailAndPassword(dataEmail, dataPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('firebase return', user);
                const currentUserCreated = { ...userStatus };
                currentUserCreated.isLoggedIn = 'true';
                currentUserCreated.email = user.email;
                currentUserCreated.displayName = user.displayName || user.email.split('@')[0];
                setUserStatus(currentUserCreated);
                console.log('UserStatusContext', userStatus);
                console.log('toggler', toggleLoginCreateLogin);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });

    }
    //firebase create with email>
    const handleLogInWithEmailPassword = (dataEmail, dataPassword) => {
        firebase.auth().signInWithEmailAndPassword(dataEmail, dataPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                console.log(user);
                const currentUserCreated = { ...userStatus };
                currentUserCreated.isLoggedIn = 'true';
                currentUserCreated.email = user.email;
                currentUserCreated.displayName = user.displayName || user.email.split('@')[0];
                setUserStatus(currentUserCreated);
                console.log('UserStatusContext in login', userStatus);
                history.replace(from);
            })
            .catch((error) => {
                console.log('login', error.message);
            });
        console.log('handleLogInWithEmailPassword clicked');
    }
    //firebase create with email<

    //firebase SignIn By Google>
    const handleSignInByGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                const currentUserCreated = { ...userStatus };
                // currentUserCreated = {
                //     isLoggedIn: 'true',
                //     email: user.email, 
                //     displayName: user.displayName || user.email.split('@')[0]
                // };
                currentUserCreated.isLoggedIn = 'true';
                currentUserCreated.email = user.email;
                currentUserCreated.displayName = user.displayName || user.email.split('@')[0];
                setUserStatus(currentUserCreated);
                console.log('UserStatusContext in login', userStatus);
                history.replace(from);
            }).catch((error) => {
                console.log(error.message);
            });
    }
    //firebase SignIn By Google<

    return (
        <div>
            <Container className="d-flex flex-column justify-content-center w-50 bg-white p-4 rounded" style={{border: "2px solid black", borderRadius: "5px"}}>
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
                <ButtonBase onClick={handleSignInByGoogle}><SignIcon></SignIcon> Continue with Google</ButtonBase>
            </Container >
        </div>
    );
};


export default Login;