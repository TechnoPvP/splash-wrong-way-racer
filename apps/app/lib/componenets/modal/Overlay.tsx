import React, { FC } from 'react';

interface OverlayProps {}

const Overlay: FC<OverlayProps> = (props) => {
  return (
    <>
      <div className="overlay"></div>


      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(5px);
        }
      `}</style>
    </>
  );
};

export default Overlay;
