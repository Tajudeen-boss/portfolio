'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Dynamic colors based on theme
    const primaryColor = theme === 'dark' ? 0x93c5fd : 0x3b82f6; // Light blue for dark, blue for light
    const secondaryColor = theme === 'dark' ? 0x1d4ed8 : 0x93c5fd; // Dark blue for dark, light blue for light
    const accentColor = theme === 'dark' ? 0xdbeafe : 0x1e40af; // Very light blue for dark, very dark blue for light

    // Geometry and materials
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.OctahedronGeometry(0.7),
      new THREE.TetrahedronGeometry(0.8),
      new THREE.ConeGeometry(0.5, 1, 8),
      new THREE.TorusGeometry(0.5, 0.2, 16, 100),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: primaryColor, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: secondaryColor, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: accentColor, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
    ];

    // Create floating objects with more variety
    const objects: THREE.Mesh[] = [];
    
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random position
      mesh.position.x = (Math.random() - 0.5) * 25;
      mesh.position.y = (Math.random() - 0.5) * 25;
      mesh.position.z = (Math.random() - 0.5) * 25;
      
      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      mesh.rotation.z = Math.random() * Math.PI;
      
      // Random scale
      const scale = Math.random() * 0.8 + 0.3;
      mesh.scale.set(scale, scale, scale);
      
      // Store initial position for animation
      mesh.userData = {
        initialPosition: mesh.position.clone(),
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.01,
        },
        floatSpeed: Math.random() * 0.002 + 0.001,
        floatRange: Math.random() * 2 + 1,
      };
      
      objects.push(mesh);
      scene.add(mesh);
    }

    // Enhanced particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 150;
      positions[i + 1] = (Math.random() - 0.5) * 150;
      positions[i + 2] = (Math.random() - 0.5) * 150;
      
      // Random colors from our palette
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        const color = new THREE.Color(primaryColor);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      } else if (colorChoice < 0.66) {
        const color = new THREE.Color(secondaryColor);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      } else {
        const color = new THREE.Color(accentColor);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.03,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Animate objects with more complex movements
      objects.forEach((obj, index) => {
        const userData = obj.userData;
        
        // Rotation
        obj.rotation.x += userData.rotationSpeed.x;
        obj.rotation.y += userData.rotationSpeed.y;
        obj.rotation.z += userData.rotationSpeed.z;
        
        // Float animation with different patterns
        obj.position.y = userData.initialPosition.y + 
          Math.sin(time * userData.floatSpeed + index) * userData.floatRange;
        obj.position.x = userData.initialPosition.x + 
          Math.cos(time * userData.floatSpeed * 0.7 + index) * (userData.floatRange * 0.5);
        
        // Mouse interaction with smoother response
        const distance = Math.sqrt(
          Math.pow(obj.position.x - mouse.x * 15, 2) + 
          Math.pow(obj.position.y - mouse.y * 15, 2)
        );
        
        if (distance < 5) {
          const force = (5 - distance) / 5;
          obj.position.x += (mouse.x * 15 - obj.position.x) * 0.01 * force;
          obj.position.y += (mouse.y * 15 - obj.position.y) * 0.01 * force;
          obj.rotation.x += force * 0.02;
          obj.rotation.y += force * 0.02;
        }
        
        // Scale pulsing
        const baseScale = 0.3 + Math.random() * 0.8;
        const pulse = 1 + Math.sin(time * 2 + index) * 0.1;
        obj.scale.setScalar(baseScale * pulse);
      });
      
      // Animate particles
      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;
      
      // Update particle positions for floating effect
      const positions = particles.geometry.attributes.position.array as Float32Array;
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(time + i) * 0.01;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Camera movement based on mouse with easing
      camera.position.x += (mouse.x * 1 - camera.position.x) * 0.01;
      camera.position.y += (mouse.y * 1 - camera.position.y) * 0.01;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      objects.forEach(obj => {
        obj.geometry.dispose();
        if (obj.material instanceof THREE.Material) {
          obj.material.dispose();
        }
      });
      
      particleGeometry.dispose();
      particleMaterial.dispose();
      
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [theme]);

  return <div ref={mountRef} className="absolute inset-0" />;
};

export default ThreeScene;