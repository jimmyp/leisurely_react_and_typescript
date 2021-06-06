import { useState } from 'react';
import './App.css';
import { Frame } from './Frame';
import { Controls } from './Controls'

function App(props: {}) {

  return (
    <div>
      <Frame />
      <Controls />
    </div>
  );
}

export default App;

