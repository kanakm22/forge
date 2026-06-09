import "./Sidebar.css";
import {useContext} from "react";
import {MyContext} from "./MyContext.jsx";
import { useEffect } from "react";

function Sidebar() {
  const {allThreads, setAllThreads, currThreadId} = useContext(MyContext);

  const getAllThreads = async ()=>{

    try{
      const response = await fetch("http://localhost:8080/api/thread");
      const res = await response.json();
      const filteredData = res.map(thread => ({threadId : thread.threadId, title: thread.title}))
      console.log(filteredData);
      setAllThreads(filteredData);
    }catch(err) {
      console.log(err)
    }
  };

  useEffect(()=>{
    getAllThreads();
  },[])



  return ( 
    <section className="sidebar">
    {/* new chat button */}
    <button>
      <img src="src/assets/logo.png" alt="Forge" className="logo" />
      <span><i className="fa-solid fa-pen-to-square "></i></span>
    </button>

    

    {/* history */}
    <ul className="history">
      {
        allThreads?.map((thread, idx) =>(
          <li key={idx}>{thread.title}</li>
        ))
      }

    </ul>
    

    {/* sign */}
    <div className="sign">
      <p>By Forge &hearts;</p>
    </div>
    </section>
   );
}

export default Sidebar;