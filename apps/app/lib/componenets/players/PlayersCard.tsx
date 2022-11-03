import { FC, useState } from 'react';
import {
  Avatar,
  avatarClasses,
  Box,
  Button,
  Paper,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { PlayerPayload } from '../../socket/socket-connection';
import SettingsModal from '../modal/SettingsModal';

export interface PlayersCardProps {
  maxPlayerCount: number;
  players: PlayerPayload[];
}

const PlayersCard: FC<PlayersCardProps> = ({ maxPlayerCount, players }) => {
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);

  return (
    <>
      <Paper
        sx={{
          background: 'rgba(16, 12, 74, 0.2)',
          boxShadow: 'inset 0px 4px 63px rgba(255, 255, 255, 0.25)',
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: '4px 16px',
            background:
              ' radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(34, 21, 49, 0.5) 0%, rgba(22, 22, 48, 0.5) 71.87%), rgba(19, 20, 68, 0.5);',
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight={700}>
              Players
            </Typography>
            <Typography variant="body2" fontWeight={700}>
              {players?.length}/{maxPlayerCount}
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={1.5} sx={{ p: 1.5 }}>
          <Button
            variant="contained"
            startIcon={<SettingsOutlinedIcon />}
            onClick={() => setSettingsModalOpen(true)}
          >
            Setting
          </Button>

          <div className="players-list">
            {players.map((player, i) => (
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                key={player.name}
              >
                {/* Player avatar is returning 400 from Cloudfront CDN */}
                <Avatar sx={{ width: 24, height: 24 }}>
                  {player.name.substring(0, 1)}{' '}
                </Avatar>
                <Typography>{player.name}</Typography>
              </Stack>
            ))}
          </div>
        </Stack>
      </Paper>

      {isSettingsModalOpen && <SettingsModal onClose={() => setSettingsModalOpen(false)} />}

      <style jsx>{`
        .players-list {
          height: 280px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </>
  );
};

export default PlayersCard;
