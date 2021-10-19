import React, { useState } from 'react';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';

const Login = () => {

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/';


    const { signInWithGoogle,handleEmailLogin} = useAuth();


    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});

    const handleGoogleLogin = () => {

        signInWithGoogle()
        .then(result => {
            history.push(redirect_uri);
            })
            .catch(error => {
        })
    }



    
    
    const handleRegistration = e => {
        e.preventDefault();
    }

    const handleEmail = e => {
        setEmail(e.target.value);
   
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }



    const handleLogin = () => {
        handleEmailLogin(email, password)
        .then((result) => {
    history.push(redirect_uri);
  })
    }


    return (
        <div className='container'>

            <h1>Please Login</h1>


            <form className='mb-3' onSubmit={handleRegistration}>
 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={handleLogin}  className="btn btn-primary">Log In</button>
            </form>
            <div className="mb-3 form-check">
    <p>Don't have any account? Please <Link to='/register'>Register</Link></p> 
  </div>
           
                    <button onClick={handleGoogleLogin} className="btn btn-warning">Google Sing In</button>
        </div>
    );
};

export default Login;