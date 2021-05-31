import React, { useState } from 'react';
import './App.css';

const Image = (props: {rotation: number}) =>
  <img
    alt="mi imagia"
    src="https://pixabay.com/get/g1749546ed8da4018ceb48a5292b1d2607f9af1cb045c7bf6ecd9e57074795b166dd33f7d64845b8c30f00e66049bd7bc1f50d739420c29542edb16aeb55ce587_640.jpg"
    style={{transform: `rotate(${props.rotation}deg)`}}
  />

const Controls = (props: { onCounterClockwiseClick: () => void, onClockwiseClick: () => void }) =>
    <div>
      <button onClick={props.onCounterClockwiseClick}>Left</button>
      <button onClick={props.onClockwiseClick}>Right</button>
    </div>

function App() {
  const [rotation, setRotation] = useState(0);
  console.log("TODO: How does useState know which state to return?");
  return (
    <div>
      <Image rotation={rotation} />
      <Controls 
        onCounterClockwiseClick={() => setRotation(rotation-45)}
        onClockwiseClick={() => setRotation(rotation+45)}
      />
    </div>
  );
}

export default App;
