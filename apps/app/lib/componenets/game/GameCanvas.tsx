import { Application } from 'pixi.js';
import {
  FC,
  memo, useEffect,
  useRef
} from 'react';
import { Controls, Game } from './logic.game';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GameCanvasProps {}

const GameCanvas: FC<GameCanvasProps> = ({ ...props }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Game | null>(null);

  useEffect(() => {
    const app = new Application({
      width: canvasRef.current.clientWidth,
      resolution: window.devicePixelRatio || 1,
      antialias: true,
    });

    canvasRef.current.appendChild(app.view);
    const game = new Game(app);
    gameRef.current = game;

    const allowedKeys = ['ArrowLeft', 'ArrowRight'];
    const onKeyUp = (event: KeyboardEvent) => {
      if (!allowedKeys.includes(event.key)) return;

      game.processControllerInput(event.key as Controls);
    };

    document.addEventListener('keyup', onKeyUp);

    app.start();
    return () => {
      app.stop();
      app.destroy(true, true);
      document.removeEventListener('keyup', onKeyUp);
    };
  });

  return (
    <>
      <div className="canvas" ref={canvasRef}></div>

      <style jsx>{`
        .canvas {
          margin: 0 auto;
          display: flex;
          justify-content: center;
          grid-area: canvas;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default memo(GameCanvas);
