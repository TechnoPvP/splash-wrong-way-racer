import React, { ChangeEventHandler, FC, useState, ChangeEvent } from 'react';
import classNames from 'classnames';

interface SwitchProps {
  onChange?: ChangeEventHandler;
}

const Switch: FC<SwitchProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setChecked(target.checked);
  };
  return (
    <>
      <div className="switch-container">
        <button className={classNames('switch', checked && 'checked')}>
          <div className="switch__thumb switch__thumb--left">on</div>
          <div className="switch__thumb switch__thumb--right">off</div>
          <div className="control">
            <div className="control__strike"></div>
            <div className="control__strike"></div>
            <div className="control__strike"></div>
          </div>
        </button>

        <input
          type="checkbox"
          className="hidden-checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </div>

      <style jsx>{`
        .switch-container {
          position: relative;
          width: max-content;
        }

        .hidden-checkbox {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          padding: 0;
          margin: 0;
          appearance: none;
          opacity: 0;
          left: 0;
          z-index: 10;
          cursor: pointer;
        }

        .switch {
          border: 1px solid black;
          height: 30px;
          width: 78px;
          border-radius: 4px;
          display: flex;
          position: relative;
          overflow: hid;

          &.checked .control {
            border-radius: 0 4px 4px 0;
            transform: translateX(100%);
          }
          &__thumb {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-black);
            font-weight: var(--fw-semi-bold);
            height: 100%;
            width: 100%;
            font-size: 14px;
          }

          &__thumb--left {
            border-radius: 4px 0 0 4px;
            background: linear-gradient(
              180deg,
              #febe00 -7.69%,
              #ff6e01 81.99%,
              #ff0f00 127.88%
            );
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
          }

          &__thumb--right {
            border-radius: 0px 4px 4px 0px;
            background-color: var(--color-red);
          }
        }

        .control {
          display: flex;
          align-items: center;
          gap: 4px;
          justify-content: center;
          position: absolute;
          width: 50%;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(
            180deg,
            #995aff -7.69%,
            rgba(108, 58, 252, 0.91) 127.88%
          );
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
          transition: transform 0.15s ease-in-out;
          border-radius: 4px 0 0 4px;

          &__strike {
            display: flex;
            height: 45%;
            width: 1.5px;
            background-color: #c2a6ff;
          }
        }

        button {
          appearance: none;
          padding: 0;
          border: none;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

Switch.defaultProps = {};

export default Switch;
