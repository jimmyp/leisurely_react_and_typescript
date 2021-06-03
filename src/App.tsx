import React, { SetStateAction, useState } from 'react';
import './App.css';

type State = {
  imageIndexOffset: number
  imagesWithRotations: { url: string, rotation: number}[]
}

function Image(props: {state: State}){
  const currentImage = props.state.imagesWithRotations[getCurrentImageIndex(props.state)];
  return <img
    alt="mi imagia"
    src={currentImage.url}
    style={{transform: `rotate(${currentImage.rotation}deg)`}}
  />
}

function getCurrentImageIndex(state: State): number
{
  return state.imageIndexOffset % state.imagesWithRotations.length;
}

function rotateCurrentImage(rotationDelta: number, prev: State): State
{
  const currentImageIndex = getCurrentImageIndex(prev);

  const newImages =
    prev.imagesWithRotations.map((img, index) => 
      index === currentImageIndex 
        ?  { url: prev.imagesWithRotations[currentImageIndex].url, rotation: prev.imagesWithRotations[currentImageIndex].rotation + rotationDelta}
        : img
    );

  return {
    ...prev,
    imagesWithRotations: newImages
  }
}

const Controls = (props: { 
  setState: React.Dispatch<SetStateAction<State>>, 
}) =>
    <div>
      <button onClick={() => props.setState(prev => rotateCurrentImage(-45, prev))}>CCW</button>
      <button onClick={() => props.setState(prev => ({
      ...prev,
      imageIndexOffset: prev.imageIndexOffset++
      }))}>Next Image</button>
      <button onClick={() => props.setState(prev =>  rotateCurrentImage(45, prev))}>CW</button>
    </div>

function App() {
  //TODO: as a stretch try to use context
  const [state, setState] = useState({
    imageIndexOffset: 0,
    imagesWithRotations: [
      { url: "https://pixabay.com/get/gc6d3b8f771160bcde6f8ce201c637b07baa5f201659fe2b77ac44df7c7205d4103921d4caa547e86d83ad63c9cea30829bff95d87086cc5b653791963d073d74_1280.jpg", rotation: 0}, 
      { url: "https://pixabay.com/get/gf29e2dbbd069c013aec5118aa8c344cdb4d5b7b5f88b7e0817589ea0074c0c6cfc9da90fe7fbd903194a5d3e4efa993af054ff2de04456518619e93053ec5fa8_1280.jpg", rotation: 0},
      { url: "https://pixabay.com/get/gdc59d1c756b578da89b6926d009576b1a4ea16c31e2c2eb08b3b9d9c8a78c0f542e39e9089d9e3f370353148149f57a3107a5a3a24797d95acae81cda72f7bab_1280.jpg", rotation: 0},
      { url: "https://pixabay.com/get/gc552e60c1a347ff3dc0f80a13c6fe273ff9097ede5c9df301d12d0e75cf9f8fba161dbc9c5286e14ae780b5cc09bc3fb8a3ae2e925f76e1165bceac8514921a9_1280.jpg", rotation: 0}
    ]
  });

  return (
    <div>
      <Image state={state} />
      <Controls 
        setState={setState}
      />
    </div>
  );
}

export default App;
