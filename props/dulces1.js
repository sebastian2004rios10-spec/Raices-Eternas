import * as THREE from "../js/three.module.js";

export default function ESC0D({x, y, z}) {

    
// Dulce 1 - Cuerpo
var geometry01 = new THREE.CylinderGeometry(0.7, 0.7, 1.4, 16);
var material01 = new THREE.MeshLambertMaterial({
    color: 0xFF0055
});
var mesh01 = new THREE.Mesh(geometry01, material01);
mesh01.position.set(-1, 2, 0);
mesh01.rotation.set(0, 0, Math.PI / 2);
mesh01.castShadow = true;
//scene.add(mesh01);

// Dulce 1 - Envoltorio Izquierdo
var geometry02 = new THREE.ConeGeometry(0.9, 1.2, 16);
var material02 = new THREE.MeshLambertMaterial({
    color: 0xFFB6C1
});
var mesh02 = new THREE.Mesh(geometry02, material02);
mesh02.position.set(-1.6, 2, 0);
mesh02.rotation.set(0, 0, -Math.PI / 2);
//scene.add(mesh02);

// Dulce 1 - Envoltorio Derecho
var geometry03 = new THREE.ConeGeometry(0.9, 1.2, 16);
var mesh03 = new THREE.Mesh(geometry03, material02);
mesh03.position.set(-0.3, 2, 0);
mesh03.rotation.set(0, 0, Math.PI / 2);
//scene.add(mesh03);


// Dulce 2 - Cuerpo
var geometry04 = new THREE.CylinderGeometry(0.56, 0.56, 1.12, 16);
var material04 = new THREE.MeshLambertMaterial({
    color: 0x12B314
});
var mesh04 = new THREE.Mesh(geometry04, material04);
mesh04.position.set(2, 2, 0);
mesh04.rotation.set(0, 0, Math.PI / 2);
mesh04.castShadow = true;
//scene.add(mesh04);

// Dulce 2 - Envoltorio Izquierdo
var geometry05 = new THREE.ConeGeometry(0.72, 0.96, 16);
var material05 = new THREE.MeshLambertMaterial({
    color: 0x89E08A
});
var mesh05 = new THREE.Mesh(geometry05, material05);
mesh05.position.set(1.36, 2, 0);
mesh05.rotation.set(0, 0, -Math.PI / 2);
//scene.add(mesh05);

// Dulce 2 - Envoltorio Derecho
var geometry06 = new THREE.ConeGeometry(0.72, 0.96, 16);
var mesh06 = new THREE.Mesh(geometry06, material05);
mesh06.position.set(2.64, 2, 0);
mesh06.rotation.set(0, 0, Math.PI / 2);
//scene.add(mesh06);


// Dulce 3 - Cuerpo
var geometry07 = new THREE.CylinderGeometry(0.56, 0.56, 1.12, 16);
var material07 = new THREE.MeshLambertMaterial({
    color: 0xF54927
});
var mesh07 = new THREE.Mesh(geometry07, material07);
mesh07.position.set(.7, 2, 1.5);
mesh07.rotation.set(0, 0, Math.PI / 2);
mesh07.castShadow = true;
//scene.add(mesh07);

// Dulce 2 - Envoltorio Izquierdo
var geometry08 = new THREE.ConeGeometry(0.72, 0.96, 16);
var material08 = new THREE.MeshLambertMaterial({
    color: 0xE08675
});
var mesh08 = new THREE.Mesh(geometry08, material08);
mesh08.position.set(-.06, 2,1.5);
mesh08.rotation.set(0, 0, -Math.PI / 2);
//scene.add(mesh08);

// Dulce 2 - Envoltorio Derecho
var geometry09 = new THREE.ConeGeometry(0.72, 0.96, 16);
var material09 = new THREE.MeshLambertMaterial({
    color: 0xE08675
});
var mesh09 = new THREE.Mesh(geometry09, material09);
mesh09.position.set(1.5, 2, 1.5);
mesh09.rotation.set(0, 0, Math.PI / 2);
//scene.add(mesh09);


// Dulce 4 - Cuerpo
var geometry010 = new THREE.CylinderGeometry(0.56, 0.56, 1.12, 16);
var material010 = new THREE.MeshLambertMaterial({
    color: 0x25139C
});
var mesh010 = new THREE.Mesh(geometry010, material010);
mesh010.position.set(0.6, 2, -1.5);
mesh010.rotation.set(0, 0, Math.PI / 2);
mesh010.castShadow = true;
//scene.add(mesh010);

// Dulce 2 - Envoltorio Izquierdo
var geometry011 = new THREE.ConeGeometry(0.72, 0.96, 16);
var material011 = new THREE.MeshLambertMaterial({
    color: 0x8981D4
});
var mesh011 = new THREE.Mesh(geometry011, material011);
mesh011.position.set(.06, 2,-1.5);
mesh011.rotation.set(0, 0, -Math.PI / 2);
//scene.add(mesh011);

// Dulce 2 - Envoltorio Derecho
var geometry012 = new THREE.ConeGeometry(0.72, 0.96, 16);
var material012 = new THREE.MeshLambertMaterial({
    color: 0x8981D4
});
var mesh012 = new THREE.Mesh(geometry012, material012);
mesh012.position.set(1.2, 2, -1.5);
mesh012.rotation.set(0, 0, Math.PI / 2);
//scene.add(mesh012);



// Base del plato
var geometry013 = new THREE.CylinderGeometry(2.5, 1.8, 0.15, 40);
var material013 = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF
});
var mesh013 = new THREE.Mesh(geometry013, material013);
mesh013.position.set(0.5, 1, 0);
mesh013.castShadow = true;
//scene.add(mesh013);

// Borde del plato
var geometry014 = new THREE.CylinderGeometry(3, 2, 0.1, 40);
var material014 = new THREE.MeshLambertMaterial({
    color: 0xEEEEEE
});
var mesh014 = new THREE.Mesh(geometry014, material014);
mesh014.position.set(.5, 1, 0);
mesh014.castShadow = true;
//scene.add(mesh014);


 

const ESC0D = new THREE.Group();
ESC0D.add(mesh01, mesh02, mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh010,mesh011,mesh012,mesh013,mesh014);
ESC0D.position.set(x,y,z);

return ESC0D;

}
