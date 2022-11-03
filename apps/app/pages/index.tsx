import {
  Button,
  Container,
  Input,
  Tab,
  Tabs,
  useMediaQuery
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { ChangeEvent, memo, ReactElement, useEffect, useState } from 'react';
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
  const [activeTab, setActiveTab] = useState<number>(0);

  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    socket.connect();

    socket.on('newChat', (message) => {
      setChatMessages((messages) => [
        ...messages,
        <ChatPlayerMessage player="Adam GHowib" key={crypto.randomUUID()}>
          {message}
        </ChatPlayerMessage>,
      ]);
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

    return () => {
      socket.removeAllListeners();
      socket.offAny();
    };
  }, []);

  const handleTabChange = (event: ChangeEvent, value: number) => {
    setActiveTab(value);
  };

  return (
    <div className="container">
      <Container sx={{ py: 2 }}>
        <Stack direction="column" spacing={2} sx={{ height: '100%' }}>
          <GameCanvas />

          <Stack
            gap={2}
            boxShadow={
              isSmallScreen &&
              '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 37px #573DC6, inset 0px 4px 30px rgba(255, 255, 255, 0.25)'
            }
            borderRadius={isSmallScreen && 2}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              sx={{
                display: !isSmallScreen ? 'none' : 'block',
              }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: 'white',
                  boxShadow: 'box-shadow: 0px 0px 4px rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              <Tab label="Item One" key="records" />
              <Tab label="Item Two" key="players" />
              <Tab label="Item Three" key="chat" />
            </Tabs>

            <Grid container spacing={2} padding={isSmallScreen && 2}>
              <Grid
                item
                md={4}
                xs={12}
                display={isSmallScreen && activeTab != 0 ? 'none' : 'unset'}
              >
                <LeaderBoard
                  playerRecords={players}
                  rankFromTotal="15k"
                  lastRecord="3:44"
                  rankPosition={144}
                />
              </Grid>

              <Grid
                item
                md={4}
                xs={12}
                display={isSmallScreen && activeTab != 1 ? 'none' : 'unset'}
              >
                <div className="chat">
                  <ChatWindow messages={chatMessages} />

                  <div className="chat__input">
                    <Input fullWidth />
                    <Button>Send</Button>
                  </div>
                </div>
              </Grid>

              <Grid
                item
                md={4}
                xs={12}
                display={isSmallScreen && activeTab != 2 ? 'none' : 'unset'}
              >
                <PlayersCard maxPlayerCount={12} players={players} />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Container>

      <style jsx>{`
        .container {
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

export default memo(Index);
