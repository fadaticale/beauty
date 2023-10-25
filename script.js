// Import the necessary Three.js components
import * as THREE from 'https://cdn.skypack.dev/three@0.130.1';
import GLTFLoader from 'https://cdn.skypack.dev/three-gltf-loader';

// Define and export the initScene function
export function initScene() {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load a 3D model using the GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
        'file:///C:/Users/jdog2/Downloads/beauty/scene.gltf',  // Replace with the path to your GLTF model
        (gltf) => {
            scene.add(gltf.scene);  // Add the loaded model to the scene
            animate();  // Call the animate function
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');  // Optional: Log loading progress
        },
        (error) => {
            console.error('An error happened:', error);  // Log any errors that occur
        }
    );

    // Define the animate function
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
}

