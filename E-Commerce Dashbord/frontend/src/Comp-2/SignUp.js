import React, { useEffect } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // redirect

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); //only works inside function components or custom hooks.

    useEffect(() => {  // Do Not Render the SingUp Page 
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    })

    const collectDate = async () => {
        console.log(name, email, password); // Log the values of name, email, password

        let result = await fetch('http://localhost:5000/SignUp', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }), // Convert object to JSON string
            headers: {
                'Content-Type': "application/json",  // Correct header to indicate JSON content
            },
        });

        // Parse the JSON response
        result = await result.json(); // Correctly parse the JSON response
        console.log(result); // Log the response
        localStorage.setItem('user', JSON.stringify(result.result)) // browser data save
        localStorage.setItem('token', JSON.stringify(result.auth))  
        if (result) {
            navigate('/')
        }
    };

    return (
        <div>
            <h1>SignUp</h1>
            <input className="inputBox" type="text" placeholder="Name" value={name}
                onChange={(event) => {
                    setName(event.target.value);
                    console.log(event.target.value);
                }} />

            <input className="inputBox" type="text" placeholder="Email" value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                    console.log(event.target.value);
                }} />

            <input className="inputBox" type="password" placeholder="Password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value);
                    console.log(event.target.value);
                }} />

            <button onClick={collectDate} type="submit">Submit</button>
        </div>
    )
}

export default SignUp;
