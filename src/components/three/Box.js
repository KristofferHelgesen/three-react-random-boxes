

import React, { useRef, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useFrame, extend, useThree } from "react-three-fiber";
import { useSpring, a } from "react-spring/three";


var t = 0;
export const Box = ({position,sizeX,sizeY,sizeZ,color}) => {
 
  t += 0.01;     
  const meshRef = useRef();
  const [active, setActive] = useState(false);

  const props = useSpring({
    scale: active ? [2, 2, 2] : [sizeX, sizeY, sizeZ],
    color: active ? "green" : color,
  });

  const handleClick = () => {
    setActive(!active);
  };

  useFrame(() => {

   //meshRef.current.position.x += 0.01;
  });


  return (
    <a.mesh
      position={position} 
      ref={meshRef}
      onClick={() => handleClick(!active)}
      scale={props.scale}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};
