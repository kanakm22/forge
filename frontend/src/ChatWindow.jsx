import "./ChatWindow.css";
import Chat from "./Chat.jsx";

function ChatWindow() {
  return ( 
    <div className="chatWindow">
      <div className="navbar">
        <span>Forge <i className="fa-solid fa-chevron-down"></i> </span>
        <div className="userIconDiv">
          <span className="userIcon"><i className="fa-solid fa-user"></i></span>
        </div>
      </div>

      <Chat />

      <div className="chatInput">
        <div className="inputBox">
          <input type="text" placeholder="Ask anything" />
         <div id="submit"> <i class="fa-solid fa-paper-plane"></i></div>

        </div>
        <p className="info">
          Forge is an AI and can make mistakes. Check important info. See Cookie Preferences.
        </p>

      </div>

      

    </div>
   );
}

export default ChatWindow;