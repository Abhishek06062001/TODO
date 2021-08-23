import React, { useState } from 'react'
import { connect, useDispatch, } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signUp } from '../../actions/authActions'

const SignUp = ({uid}) => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(signUp({email,password}))
        
    }
    if(uid){
      history.push('/')
    }
    return (
        <form onSubmit={handleSubmit} className="container" autoComplete="off" style={{marginTop:'30px'}}>
        <legend><h4>SignUp</h4></legend>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Sign In</button>
</form>
    )
}
const mapStateToProps = (state) => {
  
  const uid = state.firebase.auth.uid
  return{
    uid:uid
  }
};

export default connect(mapStateToProps) (SignUp)
