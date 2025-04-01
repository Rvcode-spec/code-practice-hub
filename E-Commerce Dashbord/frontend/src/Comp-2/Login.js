import React, { useEffect } from 'react'
import { useState } from 'react' 
import { useNavigate } from 'react-router';
export default function Login() {
    const navigate = useNavigate();
    useEffect(()=>{
        const auth =localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    })
    const [email,setEmail] = useState();
    const [password,setPassword]= useState();

    const handleLogin= async ()=>{
        let result=await fetch('http://localhost:5000/Login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if(result.auth){
            localStorage.setItem("user", JSON.stringify(result.user))
            localStorage.setItem("token", JSON.stringify(result.auth))
            navigate("/")
        }
        
        // console.log(email,password);
        
    }

    return (
    <div>
        <h1>Login</h1>

        <input type='email' placeholder='email' value={email}
        onChange={(event)=>{
            setEmail(event.target.value);
            console.log(event.target.value);
        }}
        />
        <input type='password' placeholder='password' value={password}
        onChange={(event)=>{
            setPassword(event.target.value)
            console.log(event.target.value);
            
        }}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
