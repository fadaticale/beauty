let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a GLTF loader
let loader = new THREE.GLTFLoader();

// Load your 3D model
loader.load(
  'file:///C:/Users/jdog2/Documents/earth/scene.gltf',  // Replace with the path to your GLTF file
  (gltf) => {
    // Add the loaded model to the scene
    scene.add(gltf.scene);
    animate();  // Call your animate function if you have one
  },
  (xhr) => {
    // Optional: Include a function to report loading progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  (error) => {
    // Include an error callback function to handle errors
    console.error('An error happened', error);
  }
);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
