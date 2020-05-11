import "./App.css";

import React, { useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { Box } from "./components/three/Box";

extend({ OrbitControls });
const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl, size } = useThree();
  console.log(size);
  useFrame(() => {
    orbitRef.current.update();
  });
  return <orbitControls ref={orbitRef} args={[camera, gl.domElement]} />;
};
const randomColor = () => {
  return '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function App() {
  let array = []; 
  let usedRandomNumbers = [];
  for (var i = 0; i < 3; i++) {

    var randomInt = getRandomInt(-5, 5);
 
   if(usedRandomNumbers.find(x => x != randomInt) || usedRandomNumbers.length == 0 ? true:false){
    console.log("object", randomInt)
    array.push(
      <Box color={randomColor()} position={[randomInt, 0, 0]} sizeX="1" sizeY="1" sizeZ="1" />
    );
   }
    
   


  }
  console.log("RRRR", array);

  return (
    <Canvas camera={{ position: [1, 1, 10], fov: 65 }}>
      <ambientLight />
      <spotLight position={[5, 5, 5]} />
      <Controls />
      {array}
    </Canvas>
  );
}

export default App;
