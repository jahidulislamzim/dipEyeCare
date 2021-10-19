import React, { useState } from 'react';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../Hoocks/useAuth';

const Register = () => {


    const {handleEmailRegister} = useAuth();
 
    const [fullName, setFullName] = useState({});
    const [email, setEmail] = useState({});
    const [password, setPassword] = useState({});
    
    const handleRegintration = e => {
        e.preventDefault();
    };


    const handleName = e => {
        setFullName(e.target.value);
    };

    const handleEmail = e => {
       setEmail(e.target.value);
    };

    const handlePassword = e => {
        setPassword(e.target.value);
    };



    const handleRegister = () => {
      handleEmailRegister(email, password, fullName)
            .then((result) => {
            history.push(redirect_uri);
        
      })
    }

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/';





    




    return (
       <div className='container'>

            <h1>Please Login</h1>


            <form className='mb-3' onSubmit={handleRegintration}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1"  className="form-label">Full Name</label>
    <input  type="text" onBlur={handleName} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input  type="email" onBlur={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input  type="password" onBlur={handlePassword} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" onClick={handleRegister} className="btn btn-primary">Register</button>
</form>

            <div className="mb-3 form-check">
    <p>Already have an account? <Link to='/login'>Log In</Link></p> 
  </div>



<button className="btn btn-warning">Google Sing In</button>


           
        </div>
    );
};

export default Register;