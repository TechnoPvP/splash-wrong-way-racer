import { Box, Paper, Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface LeaderboardHeaderProps {
  rankPosition: number;
  rankFromTotal: string;
  lastRecord: string;
}

const LeaderboardHeader: FC<LeaderboardHeaderProps> = ({
  lastRecord,
  rankFromTotal,
  rankPosition,
}) => {
  return (
    <>
      <Box
        component={Paper}
        sx={{
          background:
            'radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(255, 255, 255, 0.19) 0%, rgba(24, 20, 53, 0.26) 71.87%), #9747FF;',
          padding: '12px 16px',
          boxShadow: 'inset 0px 4px 12px #FFFFFF',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack gap="2px">
            <Typography variant="h4" fontWeight={900}>
              <div className="last-record-text">{lastRecord}</div>
            </Typography>
            <Typography variant="caption">Your Last record</Typography>
          </Stack>

          <Stack
            sx={{
              width: 65,
              height: 67,
              borderRadius: '50%',
              /* Change value */
              background: "radial-gradient(101.35% 101.35% at 50% 22.11%, rgba(78, 32, 130, 0.16) 0%, rgba(12, 12, 76, 0.16) 71.87%), #131444;"
            }}
            alignItems="center"
            justifyContent={'center'}
          >
            <Typography fontWeight={700}># {rankPosition}</Typography>
            <Typography variant="caption" fontSize={9}>
              from {rankFromTotal}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <style jsx>{``}</style>
    </>
  );
};

LeaderboardHeader.defaultProps = {};

export default LeaderboardHeader;
