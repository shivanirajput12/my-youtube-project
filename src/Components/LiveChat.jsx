import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "😊",
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-[405px] h-[500px] ml-4 p-2 border border-gray-400 bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form className="px-2  ml-4 border border-gray-300" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
            addMessage({
                name:"shivani ",
                message:liveMessage
            })
        )
      } }>
        <input
          className="px-2 w-[300px]"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-400 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
