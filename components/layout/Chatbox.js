import Chatbox from 'next-tawkto';

const ChatComponent = () => {
  return (
    <Chatbox
      id="6698db1d32dca6db2cb19738"
      position="bottomRight"
      syncConversation={(conversation) => console.log(conversation)}
    />
  );
};

export default ChatComponent;