import { Box, Stack } from '@mui/material';
import { FC, ReactElement, useEffect, useRef } from 'react';

export interface ChatWindowProps {
  messages: ReactElement[];
}

const ChatWindow: FC<ChatWindowProps> = ({ messages }) => {
  const chatInnerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    chatInnerRef.current.scrollTo({
      top: chatInnerRef.current.scrollHeight + 50,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="chat">
      <Box className="chat-container">
        <Stack gap={1.2} className="chat__inner" ref={chatInnerRef}>
          {messages.map((message, i) => message)}
        </Stack>
      </Box>
      <style jsx>{`
        .chat :global(.chat-container) {
          min-height: 215px;
          border-radius: 28px;
          background-color: #180b3d;
          padding: 16px;
          display: flex;
          flex-direction: column;
          background: linear-gradient(#180b3d, #180b3d) padding-box,
            linear-gradient(130deg, #1f115b 10%, #dad7e6 100%) border-box;
          border: 3px solid transparent;
        }

        .chat :global(.chat__inner) {
          height: 300px;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
};

ChatWindow.defaultProps = {};

export default ChatWindow;
