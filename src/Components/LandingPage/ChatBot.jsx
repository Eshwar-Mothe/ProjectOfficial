// import React, { useState, useRef } from "react";
// import "./Chatbot.css"; // optional external CSS

// const Chatbot = () => {
// const [isOpen, setIsOpen] = useState(false);
// const [messages, setMessages] = useState([
// { sender: "bot", text: "Hi! 👋 How can I help you today?" },
// ]);
// const [input, setInput] = useState("");
// const chatboxRef = useRef(null);

// const getBotResponse = (message) => {
// const msg = message.toLowerCase();
// if (msg.includes("hello") || msg.includes("hi")) {
// return "Hello! 👋 How can I help you today?";
// } else if (msg.includes("services")) {
// return "We offer web development, support, and custom solutions.";
// } else if (msg.includes("contact")) {
// return "You can reach us at support@example.com.";
// } else {
// return "Sorry, I didn’t understand that. Can you rephrase?";
// }
// };

// const addMessage = (sender, text) => {
// setMessages((prev) => [...prev, { sender, text }]);
// setTimeout(() => {
// if (chatboxRef.current) {
// chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
// }
// }, 100);
// };

// const handleSend = () => {
// if (!input.trim()) return;
// addMessage("user", input);
// const reply = getBotResponse(input);
// setTimeout(() => addMessage("bot", reply), 500);
// setInput("");
// };

// const handleKeyPress = (e) => {
// if (e.key === "Enter") handleSend();
// };

// return (
// <>
//     {/* Chat Bubble */}
//     {!isOpen && (
//     <div id="chatbot-bubble" onClick={()=> setIsOpen(true)}>
//         💬
//     </div>
//     )}

//     {/* Chatbot Window */}
//     {isOpen && (
//     <div id="chatbot-container">
//         <div id="chatbot-header">
//             🤖 Chatbot
//             <span id="close-btn" onClick={()=> setIsOpen(false)}>
//                 &times;
//             </span>
//         </div>

//         <div id="chatbox" ref={chatboxRef}>
//             {messages.map((msg, i) => (
//             <div key={i} className={msg.sender}>
//                 {msg.text}
//             </div>
//             ))}
//         </div>

//         <div id="inputArea">
//             <input id="input" type="text" placeholder="Type your message..." value={input} onChange={(e)=>
//             setInput(e.target.value)}
//             onKeyPress={handleKeyPress}
//             />
//             <button id="send" onClick={handleSend}>
//                 Send
//             </button>
//         </div>
//     </div>
//     )}
// </>
// );
// };

// export default Chatbot;