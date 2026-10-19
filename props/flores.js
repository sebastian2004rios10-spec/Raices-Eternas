import * as THREE from "../js/three.module.js";
export default function ESC04B({x,y,z}){

// flor de cempasuchil naranja 🏵️

var florNara = new THREE.TorusKnotGeometry(6,2,150,6,20,11);
var matNara = new THREE.MeshPhysicalMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshNara = new THREE.Mesh(florNara,matNara);
meshNara.position.set(-60,6,0);
meshNara.rotation.set(Math.PI/2,0,0);
//scene.add(meshNara);

// flor de cempasuchil centro 🏵️
var florcem = new THREE.TorusKnotGeometry(5,2,110,18,18,11);
var matcem = new THREE.MeshPhysicalMaterial({
    color:0xD2691E,
    transeisson:5,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcem = new THREE.Mesh(florcem,matcem);
meshcem.position.set(-60,8,0);
meshcem.rotation.set(Math.PI/2,0,0);
//scene.add(meshcem);

//flor morada 🌺
var flormorada = new THREE.TorusKnotGeometry(6,2,150,6,20,11);
var matmorada  = new THREE.MeshPhysicalMaterial({
    color:0x9932CC,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshmorada = new THREE.Mesh(flormorada,matmorada);
meshmorada.position.set(-30,6,0);
meshmorada.rotation.set(Math.PI/2,0,0);
//scene.add(meshmorada);
// flor de cempasuchil centro morada 🏵️
var flormo = new THREE.TorusKnotGeometry(5,2,110,18,18,11);
var matmo = new THREE.MeshPhysicalMaterial({
    color:0x800080,
    transeisson:5,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshmo = new THREE.Mesh(flormo,matmo);
meshmo.position.set(-30,8,0);
meshmo.rotation.set(Math.PI/2,0,0);
//scene.add(meshmo);




const ESC04B = new THREE.Group();
ESC04B.add(meshmorada,meshmo,meshcem,meshNara);
ESC04B.position.set(x,y,z);

return ESC04B;
    
}