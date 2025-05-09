import { Chatbox } from 'next-tawkto';
import { useCallback } from 'react';

const ChatComponent = () => {
  const syncConversation = useCallback((session) => {
    // JavaScript SDK code here
    const conversation = session.getOrCreateConversation("new_conversation");
    return conversation;
  }, []);

  return (
    <Chatbox
      syncConversation={syncConversation}
      style={{ width: "100%", height: "500px" }}
    />
  );
};

export default ChatComponent;