import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./chatbot.module.css";
import ChatSidebar from "./chatSidebar";
import HorizontalMenu from "./navigation/dark-theme/horizontalMenu";

const Chatbot = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [conversations, setConversations] = useState([
    {
      title: "Employee 1",
      messages: [],
    },
    {
      title: "Employee 2",
      messages: [],
    },
    {
      title: "Employee 3",
      messages: [],
    },
    {
      title: "Employee 4",
      messages: [],
    },
  ]);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    let collapse = localStorage.getItem("collapse");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;

    setChatHistory([...chatHistory, { type: "user", text: inputText }]);
    setInputText("");

    try {
      const prompt = `Help organize company Slack and create content for ${inputText}`;
      const openaiResponse = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer your_openai_api_key`,
          },
        }
      );

      const responseText = openaiResponse.data.choices[0].text.trim();
      setChatHistory([...chatHistory, { type: "bot", text: responseText }]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleConversationSelect = (index) => {
    setSelectedConversationIndex(index);
    setChatHistory(conversations[index].messages);
  };

  let style = collapse ? { width: "100%" } : {};

  return (
    <div>
      <HorizontalMenu collapse={collapse} setCollapse={setCollapse} />
      <div className="row w-100 m-0">
        <div className="col-sm-2 p-0" style={style}>
          <ChatSidebar
            conversations={conversations}
            onConversationSelect={handleConversationSelect}
          />
        </div>
        <div className={`${collapse ? "col-sm-8" : "col-sm-10"} p-0`} style={style}>
          <div className={styles.body}>
            <div className={styles.chatWrapper}>
              <h1>Chatbot</h1>
              <div className={styles.chatContainer}>
                {chatHistory.map((message, index) => (
                  <div key={index} className={styles.chatMessage}>
                    <strong>{message.type === "bot" ? "Chat Bot: " : "Me: "}</strong>
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className={styles.inputForm}>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className={styles.input}
                  placeholder="Type your question here..."
                />
                <button type="submit" className={styles.sendButton}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;