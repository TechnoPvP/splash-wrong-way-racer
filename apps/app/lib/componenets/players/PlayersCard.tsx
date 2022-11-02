import { FC } from 'react';
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

export interface PlayersCardProps {
  maxPlayerCount: number;
  players: PlayerPayload[];
}

const PlayersCard: FC<PlayersCardProps> = ({ maxPlayerCount, players }) => {
  return (
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
        <Button variant="contained" startIcon={<SettingsOutlinedIcon />}>
          Setting
        </Button>

        {/* Using Player Name Isn't a Valid key as it may not be unique, but we don't have another key aside from index */}
        {players.map((player, i) => (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            key={player.name}
          >
            <Avatar src={player.avatar} sx={{ width: 24, height: 24 }} />
            <Typography>{player.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};

export default PlayersCard;
