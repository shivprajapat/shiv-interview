import React, { useState } from 'react'
import codeImg from '../code-sync.png'
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id)
        console.log(id);
        console.log(roomId);
        toast.success('Created a new room');
    }
    const joinRoom = () => {

        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: { username }
        });
    }
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src={codeImg}
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="Room ID" onChange={(e) => setRoomId(e.target.value)}
                        value={roomId} />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="UserName"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username} />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a href="/" className="createNewBtn" onClick={createNewRoom}> new room </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with 💛 &nbsp; by &nbsp;
                    <a href="https://github.com/shivprajapat">Shiv Kumar</a>
                </h4>
            </footer>
        </div>
    )
}

export default Home