"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type HeroThreeSceneProps = {
  className?: string;
};

export function HeroThreeScene({ className }: HeroThreeSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // ── Renderer ──────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // ── Scene & Camera ────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 120);
    camera.position.set(0, 0, 10);

    // ── Nodes ─────────────────────────────────────────────────────────────
    const NODE_COUNT = 140;
    const HUB_COUNT = 14; // first N are "hubs" — larger, brighter

    const nodePositions: THREE.Vector3[] = [];
    const nodeVelocities: THREE.Vector3[] = [];
    const nodePhases: number[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 5;
      nodePositions.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.55,
          r * Math.cos(phi) * 0.65,
        ),
      );
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.0025,
          (Math.random() - 0.5) * 0.0018,
          (Math.random() - 0.5) * 0.0012,
        ),
      );
      nodePhases.push(Math.random() * Math.PI * 2);
    }

    const ptPositions = new Float32Array(NODE_COUNT * 3);
    const ptColors = new Float32Array(NODE_COUNT * 3);

    for (let i = 0; i < NODE_COUNT; i++) {
      ptPositions[i * 3] = nodePositions[i].x;
      ptPositions[i * 3 + 1] = nodePositions[i].y;
      ptPositions[i * 3 + 2] = nodePositions[i].z;

      if (i < HUB_COUNT) {
        // cyan hubs
        ptColors[i * 3] = 0.133;
        ptColors[i * 3 + 1] = 0.827;
        ptColors[i * 3 + 2] = 0.933;
      } else {
        // cool-white regular nodes, slight variance
        const v = 0.65 + Math.random() * 0.2;
        ptColors[i * 3] = v * 0.82;
        ptColors[i * 3 + 1] = v * 0.88;
        ptColors[i * 3 + 2] = v;
      }
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(ptPositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(ptColors, 3));

    const particleMat = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.1,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    // Slightly enlarge hubs using a custom override per-index below.
    const particles = new THREE.Points(particleGeo, particleMat);

    // ── Hub glows (additive sprites for the hub nodes) ────────────────────
    const hubGeo = new THREE.BufferGeometry();
    const hubPos = new Float32Array(HUB_COUNT * 3);
    for (let i = 0; i < HUB_COUNT; i++) {
      hubPos[i * 3] = nodePositions[i].x;
      hubPos[i * 3 + 1] = nodePositions[i].y;
      hubPos[i * 3 + 2] = nodePositions[i].z;
    }
    hubGeo.setAttribute("position", new THREE.BufferAttribute(hubPos, 3));
    const hubMat = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.28,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const hubs = new THREE.Points(hubGeo, hubMat);

    // ── Dynamic connection lines ──────────────────────────────────────────
    const MAX_SEGMENTS = 700;
    const lineBuffer = new Float32Array(MAX_SEGMENTS * 2 * 3); // 2 verts × 3 coords per segment
    const lineGeo = new THREE.BufferGeometry();
    const linePosAttr = new THREE.BufferAttribute(lineBuffer, 3);
    linePosAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeo.setAttribute("position", linePosAttr);
    lineGeo.setDrawRange(0, 0);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.072,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lineSegments = new THREE.LineSegments(lineGeo, lineMat);

    // ── Scene group ───────────────────────────────────────────────────────
    const group = new THREE.Group();
    group.add(lineSegments, particles, hubs);
    scene.add(group);

    // ── Pointer tracking ──────────────────────────────────────────────────
    const ptr = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e: PointerEvent) => {
      ptr.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ptr.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    // ── Scroll tracking ───────────────────────────────────────────────────
    const sc = { progress: 0, target: 0 };
    const camZ = { val: 10, target: 10 };
    const onScroll = () => {
      sc.target = Math.min(window.scrollY / window.innerHeight, 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Resize ────────────────────────────────────────────────────────────
    const resize = () => {
      const w = Math.max(1, canvas.clientWidth);
      const h = Math.max(1, canvas.clientHeight);
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Animation loop ────────────────────────────────────────────────────
    let frameId = 0;
    const THRESHOLD = 3.6;
    const THRESHOLD_SQ = THRESHOLD * THRESHOLD;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      // Smooth scroll + pointer
      sc.progress += (sc.target - sc.progress) * 0.055;
      ptr.x += (ptr.tx - ptr.x) * 0.038;
      ptr.y += (ptr.ty - ptr.y) * 0.038;

      // Drift nodes
      const posAttr = particleGeo.getAttribute("position") as THREE.BufferAttribute;
      const hubAttr = hubGeo.getAttribute("position") as THREE.BufferAttribute;

      for (let i = 0; i < NODE_COUNT; i++) {
        const ph = nodePhases[i];
        const p = nodePositions[i];
        const v = nodeVelocities[i];

        p.x += v.x + Math.sin(t * 0.38 + ph) * 0.00028;
        p.y += v.y + Math.cos(t * 0.29 + ph * 1.3) * 0.00022;
        p.z += v.z;

        // Soft boundary: attract back when node wanders too far
        const lenSq = p.x * p.x + p.y * p.y + p.z * p.z;
        if (lenSq > 64) {
          v.multiplyScalar(-0.6);
          p.multiplyScalar(0.994);
        }

        posAttr.setXYZ(i, p.x, p.y, p.z);
        if (i < HUB_COUNT) {
          hubAttr.setXYZ(i, p.x, p.y, p.z);
        }
      }
      posAttr.needsUpdate = true;
      hubAttr.needsUpdate = true;

      // Rebuild line segments using squared distance for performance
      let segIdx = 0;
      for (let i = 0; i < NODE_COUNT && segIdx < MAX_SEGMENTS; i++) {
        const pi = nodePositions[i];
        for (let j = i + 1; j < NODE_COUNT && segIdx < MAX_SEGMENTS; j++) {
          const pj = nodePositions[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const dz = pi.z - pj.z;
          const distSq = dx * dx + dy * dy + dz * dz;
          if (distSq < THRESHOLD_SQ) {
            const base = segIdx * 6;
            lineBuffer[base] = pi.x;
            lineBuffer[base + 1] = pi.y;
            lineBuffer[base + 2] = pi.z;
            lineBuffer[base + 3] = pj.x;
            lineBuffer[base + 4] = pj.y;
            lineBuffer[base + 5] = pj.z;
            segIdx++;
          }
        }
      }
      lineGeo.setDrawRange(0, segIdx * 2);
      linePosAttr.needsUpdate = true;

      // Group rotation: mouse parallax + slow auto-spin + scroll nudge
      group.rotation.y = ptr.x * 0.13 + t * 0.014 + sc.progress * 0.28;
      group.rotation.x = ptr.y * 0.075 - sc.progress * 0.2;

      // Camera scroll animation: pull back as user scrolls
      camZ.target = 10 + sc.progress * 5.5;
      camZ.val += (camZ.target - camZ.val) * 0.055;
      camera.position.z = camZ.val;
      camera.position.y = -sc.progress * 0.9;

      // Fade out as leaving hero
      particleMat.opacity = Math.max(0.06, 0.92 - sc.progress * 0.9);
      hubMat.opacity = Math.max(0.02, 0.38 - sc.progress * 0.36);
      lineMat.opacity = Math.max(0.005, 0.072 - sc.progress * 0.068);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      particleGeo.dispose();
      particleMat.dispose();
      hubGeo.dispose();
      hubMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
