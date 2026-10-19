import * as THREE from "../js/three.module.js";

export default function ESC02({x, y, z}) {

// Base del plato
var geometry01 = new THREE.CylinderGeometry(2, 1.8, 0.15, 32);
var material01 = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF
});
var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(0, 0.075, 0);
mesh01.castShadow = true;
//scene.add(mesh01);

// Borde del plato
var geometry02 = new THREE.CylinderGeometry(2.6, 2, 0.1, 32);
var material02 = new THREE.MeshLambertMaterial({
    color: 0xEEEEEE
});
var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(0, 0.15, 0);
mesh02.castShadow = true;
//scene.add(mesh02);


const ESC02 = new THREE.Group();
ESC02.add(mesh01, mesh02);
ESC02.position.set(x,y,z);

return ESC02;
}