// Define the initScene function
function initScene() {
    // Create a scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load a 3D model using the GLTFLoader
    const loader = new THREE.GLTFLoader();
    loader.load(
        'https://github.com/fadaticale/beauty/blob/main/scene.gltf',  // Replace with the path to your GLTF model
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

// Call the initScene function
initScene();
