import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import ChatRoom from "./pages/Chatroom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/chatroom' element={<ChatRoom />} />
    </Routes>
  )
}

export default App
