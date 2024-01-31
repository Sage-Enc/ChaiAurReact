import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
            type="text" 
            value={username}
            placeholder='Name'
            onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
            type="text"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login