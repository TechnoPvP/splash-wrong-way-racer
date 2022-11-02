import { Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

interface ChatPlayerMessage extends PropsWithChildren {
  player: string;
}

const ChatPlayerMessage: FC<ChatPlayerMessage> = ({ player, ...props }) => {
  return (
    <>
      <div className="message">
        <Typography display="inline" variant="body2" fontWeight={400} mr={1}>
          {player}:
        </Typography>
        <Typography display="inline" variant="body2" fontWeight={300}>
          {props.children}
        </Typography>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

ChatPlayerMessage.defaultProps = {};

export default ChatPlayerMessage;
