import * as THREE from "../js/three.module.js";

export default function ESC03({x, y, z}) {

// Naranja - Fruta
var geometry01 = new THREE.SphereGeometry(0.8, 32, 32);
var material01 = new THREE.MeshLambertMaterial({
    color: 0xFFA500
});
var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(-1.2, 0.8, 0);
mesh01.castShadow = true;
//scene.add(mesh01);

// Naranja - Tallo
var geometry02 = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8);
var material02 = new THREE.MeshLambertMaterial({
    color: 0x228B22
});
var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(-1.2, 1.6, 0);
//scene.add(mesh02);

// Manzana - Fruta
var geometry03 = new THREE.SphereGeometry(1.0, 32, 32);
var material03 = new THREE.MeshLambertMaterial({
    color: 0xFF0000
});
var mesh03 = new THREE.Mesh(geometry03, material03);
mesh03.position.set(0.5, 1.0, 0);
mesh03.castShadow = true;
//scene.add(mesh03);

// Manzana - Tallo
var geometry04 = new THREE.CylinderGeometry(0.05, 0.05, 0.5, 8);
var material04 = new THREE.MeshLambertMaterial({
    color: 0x8B4513
});
var mesh04 = new THREE.Mesh(geometry04, material04);
mesh04.position.set(0.5, 1.9, 0);
//scene.add(mesh04);


const ESC03 = new THREE.Group();
ESC03.add(mesh01, mesh02, mesh03, mesh04);
ESC03.position.set(x,y,z);

return ESC03;
}