import React from 'react'
import  codeImg  from '../code-sync.png'
const Home = () => {
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
                        placeholder="Room ID" />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="UserName" />
                    <button className="btn joinBtn" >
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a href="/" className="createNewBtn"> new room </a>
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