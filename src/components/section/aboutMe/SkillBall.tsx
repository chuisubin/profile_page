import * as THREE from "three";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
  Suspense,
  useMemo,
  MutableRefObject,
} from "react";
import {
  useTransform,
  useScroll,
  useTime,
  ForwardRefComponent,
} from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

import { Billboard, Text, TrackballControls } from "@react-three/drei";
import data from "@data";
import { useParams } from "next/navigation";
import { useDarkMode } from "@/hook/useDarkModeHook";
import { skillSetData } from "./SkillView";

type ThreeObjectWithMaterial = {
  material: {
    color: {
      lerp: (color: THREE.Color, num: number) => void;
    };
  };
};
const Word = ({
  word,
  position,
  ...props
}: {
  word: string | THREE.Vector3;
  position: string | THREE.Vector3;
}) => {
  const color = new THREE.Color();
  const fontProps = {
    // font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: 0,
    lineHeight: 1,
    "material-toneMapped": true,
  };
  const ref = useRef<ThreeObjectWithMaterial | null>(null);
  const [hovered, setHovered] = useState(false);
  const over = (e: { stopPropagation: () => any }) => (
    e.stopPropagation(), setHovered(true)
  );
  const out = () => setHovered(false);

  const { isDarkMode } = useDarkMode();

  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref?.current &&
      ref?.current.material.color.lerp(
        color.set(
          hovered
            ? isDarkMode
              ? "#f75002"
              : "#02a9f7"
            : isDarkMode
            ? "white"
            : "#01303f"
        ),
        0.1
      );
  });
  return (
    <Billboard {...props} position={position as THREE.Vector3 | undefined}>
      <>
        <Text
          ref={ref}
          onPointerOver={over}
          onPointerOut={out}
          onClick={() => console.log("clicked")}
          // eslint-disable-next-line react/no-children-prop
          children={word}
          {...fontProps}
        />
      </>
    </Billboard>
  );
};

const generateFibonacciSphere = (samples = 2, randomize = true) => {
  const points = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / parseFloat((samples - 1).toString())) * 2; // y goes from 1 to -1
    const radius = Math.sqrt(1 - y * y); // radius at y

    const theta = phi * i; // golden angle increment

    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;

    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
};

const Cloud = ({ count = 4, radius = 20 }) => {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const points = generateFibonacciSphere(skillSetData.length);
    for (let i = 0; i < skillSetData.length; i++)
      temp.push([points[i].multiplyScalar(radius), skillSetData[i]]);

    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} word={word as string | THREE.Vector3} />
  ));
};

export const SkillBall = () => {
  return (
    // <div className="    flex justify-end items-start">
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={null}>
        {/* <group rotation={[5, 5.5, 5]}> */}
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={4} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
    // </div>
  );
};
