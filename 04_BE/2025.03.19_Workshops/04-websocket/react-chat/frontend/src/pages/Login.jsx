import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import io from "socket.io-client";

export default function Login() {
    const [username, setUsername] = useState("");
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const newSocket = io("http://localhost:3000"); // Neuen Socket verbinden
        setSocket(newSocket);

        newSocket.on("registration success", (user)=>{
            console.log({user});
            navigate("/chatroom", {state:{username:user.username}}) // Weiterleiten zum Chatroom
        });

        newSocket.on("registration failed", (message)=>{
            alert(message);
        });

        return () => newSocket.close();
    },[navigate]);

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        socket.emit("register", username)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id='username' value={username} onChange={(evt)=>setUsername(evt.target.value)} />
            <button>Enter</button>
        </form>
    </div>
  )
}
