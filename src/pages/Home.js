import React, { useState } from 'react'
import codeImg from '../code-sync.png'
import { v4 as uuidV4 } from 'uuid';

const Home = () => {

    const [roomId, setRoomId] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id)
        console.log(id);
        console.log(roomId);
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
                        value={roomId}/>
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="UserName"
                        />
                    <button className="btn joinBtn" >
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