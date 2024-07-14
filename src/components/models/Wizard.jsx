/* eslint-disable react/no-unknown-property */
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/wizard-transformed.glb");

  const modelRef = useRef();

  useFrame((state) => {
    modelRef.current.position.y =
      -2.5 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -2.5, 0]}
      scale={[1.0, 1.0, 1.0]}
      rotation={[0.1, 0.1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode" scale={0.27}>
          <group
            name="Essence_6"
            position={[3.148, 11.501, -5.188]}
            rotation={[0, 0, 0]}
            scale={1.874}
          >
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Essence001_7"
            position={[4.362, 7.463, 4.313]}
            rotation={[0, 0, 0]}
            scale={1.186}
          >
            <mesh
              name="Object_6"
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Essence002_8"
            position={[-0.283, 6.382, -3.283]}
            rotation={[0, 0, 0]}
            scale={2.195}
          >
            <mesh
              name="Object_8"
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Essence003_9"
            position={[-2.921, 10.702, 2.064]}
            rotation={[0, 0, 0]}
            scale={1.331}
          >
            <mesh
              name="Object_10"
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Essence004_10"
            position={[-2.228, 13.762, -4.177]}
            rotation={[0, 0, 0]}
            scale={0.47}
          >
            <mesh
              name="Object_12"
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
          <group
            name="Essence005_16"
            position={[-2.43, 12.034, 3.056]}
            rotation={[0, 0, 0]}
            scale={0.602}
          >
            <mesh
              name="Object_29"
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials.PaletteMaterial001}
            />
          </group>
        </group>
        <mesh
          name="Object_14"
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.PaletteMaterial002}
          position={[-0.452, 1.993, 0.094]}
          rotation={[0, 0.148, 0]}
          scale={0.035}
        />
        <mesh
          name="Object_16"
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.PaletteMaterial003}
          position={[-0.447, 4.185, 0.065]}
          rotation={[-0.015, -0.401, -0.037]}
          scale={[0.28, 0.28, 0.293]}
        />
        <mesh
          name="Object_17"
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.PaletteMaterial004}
          position={[-0.447, 4.185, 0.065]}
          rotation={[-0.015, -0.401, -0.037]}
          scale={[0.28, 0.28, 0.293]}
        />
        <mesh
          name="Object_19"
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.PaletteMaterial001}
          position={[0.195, 2.51, 0]}
          rotation={[0, 0, 0.096]}
          scale={[0.582, 1.174, 0.522]}
        />
      </group>
    </group>
  );
});

export default Wizard;
useGLTF.preload("/models/wizard-transformed.glb");
