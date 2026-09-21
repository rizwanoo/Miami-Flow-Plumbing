import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { Sparkles, Palette } from 'lucide-react';

interface TubesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  intensity?: number;
  interactive?: boolean;
  showControls?: boolean;
}

interface ColorPalette {
  name: string;
  tubes: string[];
  lights: string[];
  ambient: string;
}

const PALETTES: ColorPalette[] = [
  {
    name: 'Miami Cyan & Ocean Flow',
    tubes: ['#00d4ff', '#0284c7', '#38bdf8', '#06b6d4', '#0ea5e9'],
    lights: ['#00f0ff', '#38bdf8', '#0284c7'],
    ambient: '#0f172a'
  },
  {
    name: 'Neon Blue & Deep Sea',
    tubes: ['#2563eb', '#3b82f6', '#60a5fa', '#1d4ed8', '#00f0ff'],
    lights: ['#3b82f6', '#60a5fa', '#00f0ff'],
    ambient: '#0b132b'
  },
  {
    name: 'Aqua Emerald Clean Stream',
    tubes: ['#10b981', '#06b6d4', '#14b8a6', '#34d399', '#0284c7'],
    lights: ['#10b981', '#00f0ff', '#34d399'],
    ambient: '#042f2e'
  },
  {
    name: 'Electric Coral & Sky Sunset',
    tubes: ['#f59e0b', '#0ea5e9', '#06b6d4', '#f97316', '#38bdf8'],
    lights: ['#f59e0b', '#00d4ff', '#f97316'],
    ambient: '#1e1b4b'
  }
];

export const TubesBackground: React.FC<TubesBackgroundProps> = ({
  children,
  className = '',
  intensity = 1.0,
  interactive = true,
  showControls = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Palette switcher
  const cyclePalette = useCallback(() => {
    setPaletteIndex((prev) => (prev + 1) % PALETTES.length);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Current active palette
    const currentPalette = PALETTES[paletteIndex];

    // Lighting
    const ambientLight = new THREE.AmbientLight(
      new THREE.Color(currentPalette.ambient),
      1.5 * intensity
    );
    scene.add(ambientLight);

    const pointLights: THREE.PointLight[] = [];
    currentPalette.lights.forEach((colorHex, idx) => {
      const light = new THREE.PointLight(new THREE.Color(colorHex), 3 * intensity, 100);
      light.position.set(
        (idx - 1) * 25,
        Math.sin(idx * 2) * 15,
        15
      );
      scene.add(light);
      pointLights.push(light);
    });

    // 3D Neon Flow Tubes Construction
    const numTubes = 6;
    const tubeObjects: {
      mesh: THREE.Mesh;
      curvePoints: THREE.Vector3[];
      speed: number;
      offset: number;
      baseRadius: number;
      color: THREE.Color;
    }[] = [];

    const group = new THREE.Group();
    scene.add(group);

    for (let i = 0; i < numTubes; i++) {
      const colorHex = currentPalette.tubes[i % currentPalette.tubes.length];
      const color = new THREE.Color(colorHex);

      const numPoints = 24;
      const points: THREE.Vector3[] = [];
      const spreadX = 55;
      const spreadY = 28;

      for (let j = 0; j < numPoints; j++) {
        const t = j / (numPoints - 1);
        const x = (t - 0.5) * spreadX * 1.5;
        const y = Math.sin(t * Math.PI * 2 + i) * (spreadY * 0.4) + (i - numTubes / 2) * 3;
        const z = Math.cos(t * Math.PI * 3 + i) * 12 - 5;
        points.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(points, false, 'centripetal', 0.5);
      const tubeRadius = (0.7 + (i % 3) * 0.4) * intensity;
      const geometry = new THREE.TubeGeometry(curve, 72, tubeRadius, 14, false);

      const material = new THREE.MeshPhysicalMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.65 * intensity,
        roughness: 0.15,
        metalness: 0.2,
        clearcoat: 0.9,
        clearcoatRoughness: 0.1,
        transparent: true,
        opacity: 0.85
      });

      const mesh = new THREE.Mesh(geometry, material);
      group.add(mesh);

      tubeObjects.push({
        mesh,
        curvePoints: points,
        speed: 0.8 + Math.random() * 0.7,
        offset: i * 1.5,
        baseRadius: tubeRadius,
        color
      });
    }

    // Add glowing fluid ambient floating particles (water droplets / energy beads)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let p = 0; p < particleCount; p++) {
      particlePos[p * 3] = (Math.random() - 0.5) * 80;
      particlePos[p * 3 + 1] = (Math.random() - 0.5) * 50;
      particlePos[p * 3 + 2] = (Math.random() - 0.5) * 40;
      particleScales[p] = Math.random() * 2 + 1;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color(currentPalette.tubes[0]),
      size: 1.2,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Tracking with smooth spring damping
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouse.targetX = (clientX / rect.width) * 2 - 1;
      mouse.targetY = -(clientY / rect.height) * 2 + 1;
      setIsInteracting(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches[0].clientX - rect.left;
        const clientY = e.touches[0].clientY - rect.top;

        mouse.targetX = (clientX / rect.width) * 2 - 1;
        mouse.targetY = -(clientY / rect.height) * 2 + 1;
      }
    };

    if (interactive) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
    }

    // Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Rotate group gently with mouse bias
      group.rotation.y = mouse.x * 0.35 + Math.sin(elapsedTime * 0.2) * 0.1;
      group.rotation.x = -mouse.y * 0.25 + Math.cos(elapsedTime * 0.25) * 0.08;
      group.position.x = mouse.x * 4;
      group.position.y = mouse.y * 3;

      // Update tube curves based on wave harmonics and cursor interaction
      tubeObjects.forEach((item, index) => {
        const pts = item.curvePoints;
        const count = pts.length;
        const tOffset = elapsedTime * item.speed + item.offset;

        for (let j = 0; j < count; j++) {
          const norm = j / (count - 1);
          const cursorInfluence = Math.exp(-Math.pow(norm - 0.5, 2) * 6) * 6;

          // Wave math
          pts[j].y =
            Math.sin(norm * 4 + tOffset) * 6 +
            Math.cos(norm * 6 - tOffset * 0.5) * 3 +
            (index - numTubes / 2) * 3.2 +
            mouse.y * cursorInfluence;

          pts[j].z =
            Math.cos(norm * 5 + tOffset * 0.8) * 7 -
            5 +
            mouse.x * cursorInfluence * 0.8;
        }

        const newCurve = new THREE.CatmullRomCurve3(pts, false, 'centripetal', 0.5);
        item.mesh.geometry.dispose();
        item.mesh.geometry = new THREE.TubeGeometry(
          newCurve,
          72,
          item.baseRadius,
          12,
          false
        );
      });

      // Update point lights
      pointLights.forEach((light, i) => {
        light.position.x = Math.sin(elapsedTime * 0.7 + i * 2) * 25 + mouse.x * 12;
        light.position.y = Math.cos(elapsedTime * 0.5 + i * 1.5) * 15 + mouse.y * 10;
      });

      // Rotate ambient particles
      particleSystem.rotation.y = elapsedTime * 0.04;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.02) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (interactive) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('touchmove', handleTouchMove);
      }

      tubeObjects.forEach((item) => {
        item.mesh.geometry.dispose();
        if (Array.isArray(item.mesh.material)) {
          item.mesh.material.forEach((m) => m.dispose());
        } else {
          item.mesh.material.dispose();
        }
      });
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [paletteIndex, intensity, interactive]);

  return (
    <div
      ref={containerRef}
      onClick={cyclePalette}
      className={`relative w-full h-full overflow-hidden select-none cursor-pointer ${className}`}
      title="Click anywhere to shift neon fluid colors"
    >
      {/* 3D WebGL Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
      />

      {/* Glassmorphism gradient veil to guarantee optimal text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90 backdrop-blur-[2px] pointer-events-none" />

      {/* Interactive Micro-Hint Pill */}
      {showControls && (
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              cyclePalette();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-semibold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Palette className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Theme: {PALETTES[paletteIndex].name.split(' ')[0]}</span>
            <span className="text-[10px] text-slate-400 bg-white/10 px-1.5 py-0.5 rounded-md ml-1">
              Click to Shift
            </span>
          </button>
        </div>
      )}

      {/* Children Overlay */}
      <div className="relative z-10 w-full h-full pointer-events-auto">
        {children}
      </div>
    </div>
  );
};
