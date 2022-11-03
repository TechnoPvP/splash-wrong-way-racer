import React, { FC, PropsWithChildren } from 'react';
import Overlay from './Overlay';
import {
  Modal,
  Fab,
  Box,
  Stack,
  Input,
  InputLabel,
  Typography,
  Slider,
  FormControlLabel,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TextInput from '../input/TextInput';
import Switch from '../switch/Switch';

interface SettingsModalProps extends PropsWithChildren {
  onClose: () => void;
}

const SettingsModal: FC<SettingsModalProps> = (props) => {
  return (
    <>
      <Overlay />
      <div className="modal">
        <Stack justifyContent="flex-end" direction="row">
          <Fab size="small" color="error" onClick={props.onClose}>
            <CloseIcon />
          </Fab>
        </Stack>

        <div className="modal__body">
          <Stack spacing={3}>
            <TextInput label="Enter your name" />

            <Box>
              <Typography variant="body2">Speed of the Game</Typography>
              <Slider
                aria-label="Game Speed"
                sx={{ height: 20, mt: '-8px' }}
                defaultValue={0}
                min={1}
                max={6}
                marks={Array.from({ length: 6 }).map((_, i) => ({
                  value: i + 1,
                  label: `${i + 1}`,
                }))}
                valueLabelDisplay="auto"
              />
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body2">Show public ID</Typography>
              <Switch />
            </Stack>
          </Stack>
        </div>
      </div>

      <style jsx>{`
        .modal {
          display: flex;
          flex-direction: column;
          padding: 1.2rem;
          justify-content: center;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #9377df;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
            inset 0px 4px 37px #573dc6,
            inset 0px 4px 30px rgba(255, 255, 255, 0.25);
          border-radius: 12px;
          min-width: 308px;
        }

        :global(.MuiSlider-markLabel) {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;

          &::before {
            content: '';
            height: 10px;
            width: 2px;
            background-color: rgba(255, 255, 255, 0.5);
            display: block;
          }
        }

        :global(.css-6pqw7n-MuiSlider-thumb) {
          background: linear-gradient(
            166.87deg,
            #995aff -1.68%,
            #864cfe 42.32%,
            #6c3afc 100.79%
          );
        }

        :global(.MuiSlider-rail) {
          background: radial-gradient(
              101.35% 101.35% at 50% 22.11%,
              #221531 0%,
              #161630 71.87%
            ),
            #131444;
        }

        :global(.MuiSlider-mark) {
          display: none;
        }

        :global(.MuiSlider-track) {
          background: linear-gradient(
            180deg,
            #febe00 -7.69%,
            #ff6e01 81.99%,
            #ff0f00 127.88%
          );
        }
      `}</style>
    </>
  );
};

SettingsModal.defaultProps = {};

export default SettingsModal;
