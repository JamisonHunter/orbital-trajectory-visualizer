import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ✅ Create a sphere
const geometry = new THREE.SphereGeometry(1, 32, 32); // radius=1, smooth with 32 segments
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// ✅ Move the camera back so it can see the sphere
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // rotate the sphere for fun
  sphere.rotation.y += 0.01;
  sphere.rotation.x += 0.005;

  renderer.render(scene, camera);
}

animate();
