import React, { FC, PropsWithChildren } from 'react';
import { ListItem } from '@mui/material';
import { Typography } from '@mui/material';
import classNames from 'classnames';

export interface ChatNotficationProps extends PropsWithChildren {
  type: 'join' | 'game';
}

const ChatMessage: FC<ChatNotficationProps> = ({ type, ...props }) => {
  return (
    <>
      <div className="message">
        <Typography display="inline" variant="body2" fontWeight={300}>
          <div className={classNames('content', `type--${type}`)}>
            {props.children}
          </div>
        </Typography>
      </div>

      <style jsx>{`
        .type--join {
          color: var(--color-pink-dark);
        }
        .type--game {
          color: var(--color-orange-100);
          font-weight: var(--fw-bold);
        }
      `}</style>
    </>
  );
};

ChatMessage.defaultProps = {};

export default ChatMessage;
