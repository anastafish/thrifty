"use client";
import { useState } from "react";


const signUp = async () => {
  
}
  
export default function SignIn() {

    const [user, setUser] = useState({email: '', password: ''});
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
        console.log(user)
    }

    return (
      <div>
        <h1>Sign In</h1>
          <label>Email</label>
          <input type="text" value={user.email} name="email" onChange={handleChange} />
          <label>Password</label>
          <input type="password" value={user.password} name="password" onChange={handleChange} />
          <button onClick={signUp}>Sign Up</button>
      </div>
    );
}  