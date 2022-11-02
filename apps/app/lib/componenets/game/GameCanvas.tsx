import React, { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GameCanvasProps {
}

const GameCanvas: FC<GameCanvasProps> = (props) => {
  return (
    <>
      <div className="canvas">

      </div>

      <style jsx>{``}</style>
    </>
  );
};

GameCanvas.defaultProps = {}

export default GameCanvas;
