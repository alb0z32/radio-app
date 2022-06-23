import React from 'react'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import { useGlobalContext } from "../helpers/context";
const SignIn = () => {
    const {isPasswordHidden,setIsPasswordHidden,email,setEmail,password,setPassword} = useGlobalContext()
  return (
    <section className="login-container">
        <div className="login-container-center">
            <h1>Sign In</h1>
            <form className="login-form">
                <div className="submit-form-control">
                <label htmlFor="emailinput">Enter your Email:</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required id="emailinput"/>
                </div>
                <div className="submit-form-control">
                <label htmlFor="passwordinput">Enter your Password:</label>
                <div className="password-container">
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type={isPasswordHidden?"password":"text"} required id="passwordinput"/>
                <button onClick={()=>setIsPasswordHidden(!isPasswordHidden)} type="button">{isPasswordHidden?<AiFillEyeInvisible/>:<AiFillEye/>}</button>
                </div>
                </div>
                <button className='submit-form-btn' onSubmit={()=>{setPassword("");setEmail("")}} type="submit">Click to Sign In</button>
                <Link className='login-path-anchor' to={`/register`}>Dont have an Account? Click here to Sign up</Link>
            </form>
        </div>
    </section>
  )
}

export default SignIn