import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, useGLTF, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import ModelEx from '../models/scene.glb';

function Model({ url }) {
    const { nodes } = useGLTF(url);
    return (
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} scale={5}>
            <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
                <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material} />
                <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material} />
            </group>
        </group>
    );
}

const Main3D = () => {
    return (
        <div className="Main3D">
            <Canvas dpr={[1.5, 2]} linear shadows>
                <fog attach="fog" args={['#272730', 16, 30]} />
                <ambientLight intensity={0.75} />
                <PerspectiveCamera makeDefault position={[15, 0, 16]} fov={70}>
                    <pointLight intensity={1} position={[-10, -25, -10]} />
                    <spotLight
                        castShadow
                        intensity={2.25}
                        angle={0.1}
                        penumbra={1}
                        position={[-25, 20, -15]}
                        shadow-mapSize={[1024, 1024]}
                        shadow-bias={-0.0001}
                    />
                </PerspectiveCamera>
                <Suspense fallback={null}>
                    <Model url={ModelEx} />
                </Suspense>
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={0.2}
                    enablePan={false}
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Stars radius={500} depth={50} count={5000} factor={10} />
            </Canvas>
        </div>
    );
};

export default Main3D;
