import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import "./Chatroom.css";

const socket = io("http://localhost:3000");

export default function Chatroom() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const location = useLocation(); // Aktuellen Pfad holen
    const username = location.state?.username; // username vom state holen

    useEffect(()=>{
        socket.emit("register", username);

        socket.on("registration success", ()=>{
            socket.on("load messages", (loadedMessages)=>{
                setMessages(loadedMessages); // Nachrichten laden
            });

            socket.on("current users", (currentUsers)=>{
                setUsers(currentUsers); // Benutzer laden
            })
        });

        socket.on("user online", (user)=>{
            setUsers((prevUsers)=>[
                ...new Map(
                    [...prevUsers, user].map((item)=>[item.username, item])
                ).values()
            ]);
        });

        socket.on("user offline", (user)=> {
            setUsers((prevUsers)=>
                prevUsers.map((u)=>(u.username === user.username ? user : u))
            )
        })

        socket.on("chat message", (msg)=>{
            setMessages((prevMessages)=>[...prevMessages, msg]); // Nachricht hinzufügen
        })

        return () => {
            socket.off("registration success");
            socket.off("load messages");
            socket.off("current users");
            socket.off("user online");
            socket.off("user offline");
            socket.off("chat message");
        }
    }, [username])

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if (message){
            socket.emit("chat message", {content: message}); // Nachricht verschicken
            setMessage("");
        }
    };

  return (
    <div className='chatroom'>
        <aside>
            <ul>
                {users.map((user)=>(
                    <li className={user.online ? "online" : "offline"} key={user.username}>
                    {user.username}
                    </li>
                ))}
            </ul>
        </aside>

        <main>
            <ul>
                {messages.map((msg, index)=>(
                    <li key={index}>
                        {msg.username}:{msg.content}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={message} onChange={(evt)=>setMessage(evt.target.value)} />
                <button>Send</button>
            </form>
        </main>
    </div>
  )
}
