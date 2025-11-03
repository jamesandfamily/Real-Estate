import * as THREE from 'three';

let scene, camera, renderer;
let animationFrameId;

export const initThreeScene = () => {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) {
    console.warn('WebGL canvas not found');
    return;
  }

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf8f9fa);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: 0x3498db,
    wireframe: true,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  window.addEventListener('resize', handleResize);

  animate();
};

const handleResize = () => {
  if (!camera || !renderer) return;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  if (scene && camera && renderer) {
    const cube = scene.children.find((child) => child.type === 'Mesh');
    if (cube) {
      cube.rotation.x += 0.001;
      cube.rotation.y += 0.001;
    }

    renderer.render(scene, camera);
  }
};

export const disposeThreeScene = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }

  window.removeEventListener('resize', handleResize);

  if (renderer) {
    renderer.dispose();
  }

  if (scene) {
    scene.traverse((object) => {
      if (object.geometry) {
        object.geometry.dispose();
      }
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  }
};
