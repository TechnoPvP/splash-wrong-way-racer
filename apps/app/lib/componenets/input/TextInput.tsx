import React, { FC } from 'react';
import { Input, InputLabel } from '@mui/material';

interface TextInputProps {
  label?: string;
}

const TextInput: FC<TextInputProps> = (props) => {
  return (
    <>
      <div className="input-wrap">
        {props.label && <label>{props.label}</label>}
        <Input />
      </div>

      <style jsx>{`
        .input-wrap {
          display: flex;
          gap: 4px;
          flex-direction: column;

          label {
            font-size: 15px;
            font-weight: var(--fw-regular);
          }
        }
      `}</style>
    </>
  );
};

export default TextInput;
