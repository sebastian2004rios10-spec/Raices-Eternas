import * as THREE from "../js/three.module.js";

export default function ESC07P({x, y, z}) {




var geometry23 = new THREE.SphereGeometry(0.2, 16, 16);
var material23 = new THREE.MeshLambertMaterial({color: 0x6A1B9A});


var mesh1 = new THREE.Mesh(geometry23, material23);
mesh1.position.set(-0.15, 0.6, 0);
var mesh2 = new THREE.Mesh(geometry23, material23);
mesh2.position.set(0.15, 0.6, 0);
var mesh3 = new THREE.Mesh(geometry23, material23);
mesh3.position.set(0, 0.6, 0.25);
var mesh4 = new THREE.Mesh(geometry23, material23);
mesh4.position.set(0, 0.6, -0.25);


var mesh5 = new THREE.Mesh(geometry23, material23);
mesh5.position.set(-0.1, 0.35, 0.1);
var mesh6 = new THREE.Mesh(geometry23, material23);
mesh6.position.set(0.1, 0.35, -0.1);


var mesh7 = new THREE.Mesh(geometry23, material23);
mesh7.position.set(0, 0.18, 0);


var geometry24 = new THREE.CylinderGeometry(0.03, 0.03, 0.4, 8);
var material24 = new THREE.MeshLambertMaterial({color: 0x4A2E00});
var mesh24 = new THREE.Mesh(geometry24, material24);
mesh24.position.set(0, 0.8, 0);


const ESC07 = new THREE.Group();
ESC07.add(mesh1, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh24);
ESC07.position.set(x, y, z);

return ESC07;
}