import * as THREE from "../js/three.module.js";
export default function ESC03S({x,y,z}){

//BOTELLA DE TEQUILA CUERPO 🍾
//flor naranja
var florNara = new THREE.TorusKnotGeometry(6,2,150,6,20,11);
var matNara = new THREE.MeshPhysicalMaterial({ color:0xFF4500, transeisson:7, rouhgness:0, ior:1.5,tickness:0.5,});
var meshNara = new THREE.Mesh(florNara,matNara);
meshNara.position.set(-30,28,0);
meshNara.rotation.set(0,0,Math.PI/2);
//scene.add(meshNara);

// flor de cempasuchil centro 🏵️
var florcem = new THREE.TorusKnotGeometry(6,2,110,18,18,11);
var matcem = new THREE.MeshPhysicalMaterial({ color:0xD2691E, transeisson:5, rouhgness:0, ior:1.5,tickness:0.5,});
var meshcem = new THREE.Mesh(florcem,matcem);
meshcem.position.set(-30,28,0);
meshcem.rotation.set(0,0,Math.PI/2);
//scene.add(meshcem);

//flor morada 🌺
var flormorada = new THREE.TorusKnotGeometry(6,2,150,6,20,11);
var matmorada  = new THREE.MeshPhysicalMaterial({ color:0x9932CC, transeisson:7,rouhgness:0, ior:1.5, tickness:0.5,});
var meshmorada = new THREE.Mesh(flormorada,matmorada);
meshmorada.position.set(-30,6,0);
meshmorada.rotation.set(0,0,Math.PI/2);
//scene.add(meshmorada);

// flor de cempasuchil centro morada 🏵️
var flormo = new THREE.TorusKnotGeometry(5,2,110,18,18,11);
var matmo = new THREE.MeshPhysicalMaterial({color:0x800080, transeisson:5, rouhgness:0, ior:1.5, tickness:0.5,});
var meshmo = new THREE.Mesh(flormo,matmo);
meshmo.position.set(-30,7,2);
meshmo.rotation.set(0,0,Math.PI/2);
//scene.add(meshmo);

//creando grupo de flores 
var ESC = new THREE.Group();
ESC.add(meshNara, meshcem,meshmorada,meshmo);
//scene.add(ESC);
ESC.scale.set(0.2, 0.2, 0.2);
ESC.position.set(-12,10,-28);


//fila izquierda 
var fila1 = ESC.clone();
//scene.add(fila1);
fila1.position.set(-12,20,-28);

var fila2 = ESC.clone();
//scene.add(fila2);
fila2.position.set(-12,30,-28);

var fila3 = ESC.clone();
//scene.add(fila3);
fila3.position.set(-12,40,-28);

//fila derecha

var fila4 = ESC.clone();
//scene.add(fila4);
fila4.position.set(23,10,-28);

var fila5 = ESC.clone();
//scene.add(fila5);
fila5.position.set(23,20,-28);

var fila6 = ESC.clone();
//scene.add(fila6);
fila6.position.set(23,30,-28);

var fila7 = ESC.clone();
//scene.add(fila7);
fila7.position.set( 23,40,-28);

//fila tapa
var fila8 = ESC.clone();
//scene.add(fila8);
fila8.position.set( 21,55,-28);
fila8.rotation.set(0,0,Math.PI/3);

var fila9 = ESC.clone();
//scene.add(fila9);
fila9.position.set( 9,60,-28);
fila9.rotation.set(0,0,Math.PI/2);

var fila10 = ESC.clone();
//scene.add(fila10);
fila10.position.set( -1,60,-28);
fila10.rotation.set(0,0,Math.PI/2);

var fila11 = ESC.clone();
//scene.add(fila11);
fila11.position.set( -9,48,-28);
fila11.rotation.set(-3,0,Math.PI/3);


const ESC03S = new THREE.Group();
ESC03S.add(ESC,fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8, fila9, fila10, fila11);
ESC03S.position.set(x,y,z);

return ESC03S;
    
}