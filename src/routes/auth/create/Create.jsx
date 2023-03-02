import React,{useState} from 'react';
import '.././Auth.scss';
import { FcGoogle } from "react-icons/fc"
import {Link} from "react-router-dom";
import { auth, provider } from '../../../firebase/firebaceconfig';
import instance from '../../../api/instance'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTransition } from 'react';

const Create = () => {
    const dispatch = useDispatch();
    const history = useHistory();
      const createAccountWithGoogle = () => {
          auth.signInWithPopup(provider)
          .then(response => console.log(response))
          .catch(err => console.log(err))
      }
  
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      name: "",
      avatar: ""
    })
    console.log(formData);
    const createUserWithEmail = (e) => {
      e.preventDefault()
      instance.post("/users", formData)
      .then(res => {
        if(res.data.email){
          dispatch({
            email: res.data.email,
             type: "CREATE_USER"
            })
            history.push("/")
        }
      })
      .catch(err => console.log(err))
    }
    return (
        <div className='create-container'>
            <div className="logo-div">
                <img width={100} src="https://pngimg.com/uploads/ebay/ebay_PNG22.png" alt="" />
            </div>
            <Link to="/auth/login"><p className='login-link'>Already a member? Sign in</p></Link>
            <div><h1 className='create-h1'>Create an account</h1></div>
            <div className="create-wrrapper">
                <div className="form-box">
                    <form onSubmit={createUserWithEmail} className='form'>
                        <div className="two-inputs">
                            <input className='create-in-fr-name' onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" placeholder='First name' required/>
                            <input className='create-in-ls-name' onChange={e => setFormData({ ...formData, avatar: e.target.value })} type="url" placeholder='avatar' required/>
                        </div>
                        <input className='create-in-email' type="email" onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder='Email' required/>
                        <input className='create-in-password' type="password" onChange={e => setFormData({ ...formData, password: e.target.value })} placeholder='    password' required/>
                        <p className='create-text'>By Creating an account, you agree to our User Agreement  and acknowledge reading our User Privacy Notice .</p>
                        <button className='form-sb-btn' type='submit'>Create account</button>
                    </form>
                </div>
                <button onClick={createAccountWithGoogle}  className='create-googleeee'><FcGoogle />  Continue with Google</button>
            </div>
        </div>
    );
}

export default Create;