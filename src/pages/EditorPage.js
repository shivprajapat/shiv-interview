import React, { useState } from 'react'
import codeImg from '../code-sync.png'
import Client from '../components/Client'
import Editor from '../components/Editor'
const EditorPage = () => {
  const [clients, setClients] = useState([
    {
      slcketId: 1, username: "Shiv Kumar",
    },
    {
      slcketId: 2, username: "Ram Kumar",
    },
  ])
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img
              className="logoImage"
              src={codeImg}
              alt="logo"
            />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => (
              <Client
                key={client.socketId}
                username={client.username}
              />
            ))}
          </div>
        </div>
        <button className="btn copyBtn">
          Copy ROOM ID
        </button>
        <button className="btn leaveBtn">
          Leave
        </button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  )
}

export default EditorPage