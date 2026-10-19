import * as THREE from "../js/three.module.js";

export default function ESC04({x, y, z}) {

// Dulce 1 - Cuerpo
var geometry01 = new THREE.CylinderGeometry(0.7, 0.7, 1.4, 16);
var material01 = new THREE.MeshLambertMaterial({
    color: 0xFF0055
});
var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(-1, 0.5, 0);
mesh01.rotation.set(0, 0, Math.PI / 2);
mesh01.castShadow = true;
//scene.add(mesh01);

// Dulce 1 - Envoltorio Izquierdo
var geometry02 = new THREE.ConeGeometry(0.9, 1.2, 16);
var material02 = new THREE.MeshLambertMaterial({
    color: 0xFFB6C1
});
var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(-1.8, 0.5, 0);
mesh02.rotation.set(0, 0, -Math.PI / 2);
//scene.add(mesh02);

// Dulce 1 - Envoltorio Derecho
var geometry03 = new THREE.ConeGeometry(0.9, 1.2, 16);
var mesh03 = new THREE.Mesh(geometry03, material02);
mesh03.position.set(-0.2, 0.5, 0);
mesh03.rotation.set(0, 0, Math.PI / 2);
//scene.add(mesh03);


// Dulce 2 - Cuerpo
var geometry04 = new THREE.CylinderGeometry(0.56, 0.56, 1.12, 16);
var material04 = new THREE.MeshLambertMaterial({
    color: 0x12B314
});
var mesh04 = new THREE.Mesh(geometry04, material04);
mesh04.position.set(2, 0.5, 0);
mesh04.rotation.set(0, 0, Math.PI / 2);
mesh04.castShadow = true;
//scene.add(mesh04);

// Dulce 2 - Envoltorio Izquierdo
var geometry05 = new THREE.ConeGeometry(0.72, 0.96, 16);
var material05 = new THREE.MeshLambertMaterial({
    color: 0x89E08A
});
var mesh05 = new THREE.Mesh(geometry05, material05);
mesh05.position.set(1.36, 0.5, 0);
mesh05.rotation.set(0, 0, -Math.PI / 2);
//scene.add(mesh05);

// Dulce 2 - Envoltorio Derecho
var geometry06 = new THREE.ConeGeometry(0.72, 0.96, 16);
var mesh06 = new THREE.Mesh(geometry06, material05);
mesh06.position.set(2.64, 0.5, 0);
mesh06.rotation.set(0, 0, Math.PI / 2);
//scene.add(mesh06);


const ESC04 = new THREE.Group();
ESC04.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06);
ESC04.position.set(x,y,z);

return ESC04;
}