import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

export interface LeaderboardPositionProps {
  rank: number;
  record: string;
}

export const LeaderboardPosition: FC<LeaderboardPositionProps> = ({
  rank,
  record,
}) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "3.5px 0",
          bgcolor: '#261B50',
          px: 1,
        }}
      >
        <Typography variant="caption">Record</Typography>
        <Typography fontWeight={800} fontSize={20}>{record}</Typography>
      </Stack>
      <Stack justifyContent={'center'} alignItems={'center'}>
        <Typography variant="caption">Rank</Typography>
        <Typography fontWeight={800} fontSize={20}>{rank}</Typography>
      </Stack>
    </Stack>
  );
};

export default LeaderboardPosition;
