import { Button, Input } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import ChatMessage from '../lib/componenets/chat/ChatNotfication';
import ChatPlayerMessage from '../lib/componenets/chat/ChatPlayerMessage';
import ChatWindow from '../lib/componenets/chat/ChatWindow';
import GameCanvas from '../lib/componenets/game/GameCanvas';
import LeaderBoard from '../lib/componenets/leaderboards/Leaderboard';
import PlayersCard from '../lib/componenets/players/PlayersCard';
import { PlayerPayload, socket } from '../lib/socket/socket-connection';

export function Index() {
  const [chatMessages, setChatMessages] = useState<ReactElement[]>([]);
  const [players, setPlayers] = useState<PlayerPayload[]>([]);

  useEffect(() => {
    socket.connect();

    socket.on('newChat', (message) => {
      setChatMessages((messages) => [
        ...messages,
        <ChatPlayerMessage player="Adam GHowib" key={crypto.randomUUID()}>
          {message}
        </ChatPlayerMessage>,
      ]);

      console.log('Player message');
    });

    socket.on('newChatJoin', (player) => {
      setChatMessages((messages) => [
        ...messages,
        <ChatMessage type="join" key={crypto.randomUUID()}>
          {player.name} Has Joined the Game
        </ChatMessage>,
      ]);
    });

    socket.on('players', (players) => {
      setPlayers(players);
    });

    socket.on('newEnemy', (location) => {
      // console.log('New Enemy Location', location);
    });

    return () => {
      socket.removeAllListeners();
      socket.offAny();
    };
  }, []);

  return (
    <div className="container">
      <GameCanvas />

      <LeaderBoard
        playerRecords={players}
        rankFromTotal="15k"
        lastRecord="3:44"
        rankPosition={144}
      />

      <div className="chat">
        <ChatWindow messages={chatMessages} />

        <div className="chat__input">
          <Input fullWidth />
          <Button>Send</Button>
        </div>
      </div>

      <PlayersCard maxPlayerCount={12} players={players} />

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 380px;
          grid-template-areas: 'canvas canvas canvas' 'leaderboard chat players';
          gap: 1rem;
        }
        .canvas {
          width: 100%;
          height: 400px;
          background-color: var(--color-alpha-black);
          grid-area: canvas;
        }

        .chat {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          &__input {
            display: flex;
            align-items: center;
            width: 100%;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Index;
