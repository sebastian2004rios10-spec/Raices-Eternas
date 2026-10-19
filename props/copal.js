import * as THREE from "../js/three.module.js";

export default function ESC01({x, y, z}) {

// Base inferior
var geometry01 = new THREE.CylinderGeometry(0.8, 1.4, 1.2, 32);
var material01 = new THREE.MeshLambertMaterial({
    color: 0x9C4D00
});
var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(0, 0.6, 0);
mesh01.castShadow = true;
//scene.add(mesh01);

// Cuello del copalero
var geometry02 = new THREE.CylinderGeometry(0.5, 0.5, 0.6, 32);
var material02 = new THREE.MeshLambertMaterial({
    color: 0xA86A34
});
var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(0, 1.3, 0);
mesh02.castShadow = true;
//scene.add(mesh02);

// Copa principal
var geometry03 = new THREE.CylinderGeometry(2.0, 1.2, 1.8, 32);
var mesh03 = new THREE.Mesh(geometry03, material02);
mesh03.position.set(0, 2.4, 0);
mesh03.castShadow = true;
//scene.add(mesh03);

// Borde superior
var geometry04 = new THREE.CylinderGeometry(2.1, 2.0, 0.2, 32);
var mesh04 = new THREE.Mesh(geometry04, material02);
mesh04.position.set(0, 3.3, 0);
mesh04.castShadow = true;
//scene.add(mesh04);

// Fuego Central
var geometry05 = new THREE.ConeGeometry(0.6, 1.8, 32);
var material05 = new THREE.MeshLambertMaterial({
    color: 0xBD360D
});
var mesh05 = new THREE.Mesh(geometry05, material05);
mesh05.position.set(0, 4.2, 0);
//scene.add(mesh05);

// Fuego Izquierdo
var geometry06 = new THREE.ConeGeometry(0.4, 1.4, 30);
var material06 = new THREE.MeshLambertMaterial({
    color: 0xE03300
});
var mesh06 = new THREE.Mesh(geometry06, material06);
mesh06.position.set(-0.3, 4.0, 0);
//scene.add(mesh06);

// Fuego Derecho
var geometry07 = new THREE.ConeGeometry(0.4, 1.4, 30);
var mesh07 = new THREE.Mesh(geometry07, material06);
mesh07.position.set(0.3, 4.0, 0);
//scene.add(mesh07);


const ESC01 = new THREE.Group();
ESC01.add(mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07);
ESC01.position.set(x,y,z);

return ESC01;
}