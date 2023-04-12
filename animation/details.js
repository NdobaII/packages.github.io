let scene;
let camera;
let renderer;


function main()
{
    const canvas= document.querySelector('#c');

    scene=new THREE.Scene();

    camera=new THREE.Perspective(45,window.innerWidth/window.innerHeight,0.1,1000);

    camera.position.z=2;
    scene.add(camera);

    renderer=new THREE.WebGLRenderer({canvas: canvas,antialias: true,});
    renderer.setSize(window.innerWidth,window.innerHeight);
}

window.onload = main;