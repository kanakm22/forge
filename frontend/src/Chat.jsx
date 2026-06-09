import "./Chat.css";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import reactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css";

function Chat() {
  const { newChat, prevChats } = useContext(MyContext)

  return (
    <>
      
      <div className="chats">
        {newChat && <h1>Start a new Chat!</h1>}
        {
          prevChats?.map((chat, idx) =>
            <div className={chat.role === "user" ? "userDiv" : "assistantDiv"} key={idx}>
              {
                chat.role === "user" ?
                  <p className="userMsg">{chat.content}</p> :
                  <reactMarkdown rehypePlugins={[rehypeHighlight]}>{chat.content}</reactMarkdown>
              }
            </div>
          )
        }

        

      </div>
    </>
  );
}

export default Chat;