import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
import { PlayerPayload } from '../../socket/socket-connection';
import LeaderboardDetails from './LeaderboardDetails';
import LeaderboardHeader from './LeaderboardHeader';
import classNames from 'classnames';

interface LeaderBoardProps {
  rankPosition: number;
  /** Unsure what this value represents, assumingly the amount of of other compitetiors */
  rankFromTotal: string;
  lastRecord: string;
  playerRecords: PlayerPayload[];
}

const LeaderBoard: FC<LeaderBoardProps> = ({
  rankPosition,
  rankFromTotal,
  lastRecord,
  playerRecords,
  ...props
}) => {
  const [focusingPlayer, setFocusingPlayer] = useState<string>(undefined);

  return (
    <div className="leaderboard">
      <Paper
        sx={{
          background: 'rgba(16, 12, 74, 0.2)',
          boxShadow: 'inset 0px 4px 63px rgba(255, 255, 255, 0.25)',
          padding: 0,
        }}
      >
        <LeaderboardHeader
          rankPosition={rankPosition}
          rankFromTotal={rankFromTotal}
          lastRecord={lastRecord}
        />

        <List sx={{ overflowY: 'scroll' }} className="leaderboard__ranks">
          {!!playerRecords?.length &&
            playerRecords.map(
              ({
                name,
                rank,
                record,
                highestRank,
                worstRecord,
                gamesPlayed,
              }) => (
                <ListItem
                  key={name}
                  sx={{ padding: 0, cursor: 'pointer' }}
                  onClick={() =>
                    setFocusingPlayer((playerName) =>
                      name === playerName ? undefined : name
                    )
                  }
                >
                  <Stack width="100%">
                    <Stack
                      direction="row"
                      width="100%"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <ListItemText sx={{ padding: '0 16px' }}>
                        <span
                          className={classNames(
                            focusingPlayer === name && 'focused',
                            'player-name'
                          )}
                          style={{ fontWeight: 600 }}
                        >
                          {name}
                        </span>
                      </ListItemText>
                      <LeaderboardDetails rank={rank} record={String(record)} />
                    </Stack>

                    {focusingPlayer === name && (
                      <Box padding={1} bgcolor="#180C3C">
                        <Stack gap={1}>
                          <span className="data-point">
                            <em>#{gamesPlayed}</em> games played
                          </span>
                          <span className="data-point">
                            Worst record: <em>{worstRecord}</em>
                          </span>
                          <span className="data-point">
                            Worst record: <em>{highestRank}</em>
                          </span>
                        </Stack>
                      </Box>
                    )}
                  </Stack>
                </ListItem>
              )
            )}
        </List>
      </Paper>

      <style jsx>{`
        .leaderboard :global(.leaderboard__ranks) {
          overflow-y: auto;
          height: 300px;

          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-thumb {
            background-color: var(--color-alpha-purple);
          }
        }

        .leaderboard :global(.last-record-text) {
          text-shadow: 4px 0 #321f62, -4px 0 #321f62, 0 4px #321f62,
            0 -4px #321f62, 4px 4px #321f62, -4px -4px #321f62, 4px -4px #321f62,
            -4px 4px #321f62;
        }

        .player-name {
          transition: text-shadow 0.15s linear;

          &.focused {
            text-shadow: 0px 0px 14px #ffffff;
          }
        }

        .data-point {
          font-size: 12px;
          color: rgba(255, 254, 254, 0.5);
          font-weight: var(--fw-medium);

          em {
            color: var(--color-white);
            font-style: normal;
          }
        }
      `}</style>
    </div>
  );
};

LeaderBoard.defaultProps = {};

export default LeaderBoard;
