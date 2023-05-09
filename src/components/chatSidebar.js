// components/chatSidebar.js
import React from "react";
import styles from "./chatSidebar.module.css";
import { Card } from "react-bootstrap";

const ChatSidebar = ({ conversations, onConversationSelect }) => {
  return (
    <div className={styles.sidebar}>
      {conversations.map((conversation, index) => (
        <Card
          key={index}
          className={`${styles.sidebarItem} mb-2`}
          onClick={() => onConversationSelect(index)}
        >
          <Card.Body className="d-flex align-items-center">
            <div className={styles.imageWrapper}>
              <img
                src={`/mask-group-37@2x.png`}
                alt="Employee Avatar"
                className={`${styles.avatar} rounded-circle`}
              />
            </div>
            <div className="ml-2">
              <Card.Title className={styles.employeeName}>
                {conversation.title}
              </Card.Title>
              <Card.Text className={styles.lastMessage}>
                {conversation.messages.length > 0 &&
                  conversation.messages[conversation.messages.length - 1].text.substring(
                    0,
                    25
                  ) + "..."}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ChatSidebar;
