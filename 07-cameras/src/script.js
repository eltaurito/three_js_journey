import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const createSphere = (color, position) => {
  const geometry = new THREE.SphereGeometry(0.25, 32, 16);
  const material = new THREE.MeshBasicMaterial({ color });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set
  return sphere;
};

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

const aspectRatio = sizes.width / sizes.height;

// Camera
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  1000
);
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

// Axes helper
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

// // Camera helper
// const helper = new THREE.CameraHelper(camera);
// scene.add(helper);

const cursor = {
  x: 0,
  y: 0,
};

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

window.camera = camera;
window.scene = scene;
window.THREE = THREE;

const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableRotate = false;
orbitControls.enableDamping = false;

camera.toor;
const cameraDirection = new THREE.Vector3();
window.addEventListener("mousemove", (event) => {
  console.log(JSON.stringify({ lookAt: orbitControls.target }));
  console.log(JSON.stringify({ position: orbitControls.object.position }));
});

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // mesh.rotation.y = elapsedTime;

  //   const amptitude = 3;

  //   camera.position.x = cursor.x * amptitude;
  //   camera.position.y = cursor.y * amptitude;
  //   camera.lookAt(-cursor.x * amptitude, -cursor.y * amptitude, 0);
  // Render
  renderer.render(scene, camera);
  orbitControls.update();

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
