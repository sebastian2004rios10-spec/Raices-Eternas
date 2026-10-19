import * as THREE from "../js/three.module.js";
export default function ESC03B({x,y,z}){

// veladora 🕯️
var geometryvela= new THREE.CylinderGeometry(10,5,25,25,45);
var materialvela = new THREE.MeshLambertMaterial({
    color:0xF0FFFF,
    side: THREE.DoubleSide,


});
var meshvela = new THREE.Mesh(geometryvela, materialvela);
//scene.add(meshvela);
meshvela.position.set(0,13,0);
//vaso veladora 🥛
var geometryvaso= new THREE.CylinderGeometry(11,6,26,26,46);
var materialvaso = new THREE.MeshLambertMaterial({
    color:0xD1FEFF,transparent:true,opacity : 0.5
});
var meshvaso = new THREE.Mesh(geometryvaso, materialvaso);
//scene.add(meshvaso);
meshvaso.position.set(0,13,0);

//mecha veladora
 var geometrymecha= new THREE.CylinderGeometry(0.3,0.3,27,25,45);
var materialmecha= new THREE.MeshLambertMaterial({
    color:0xB8860B,
    side: THREE.DoubleSide,


});
var meshmecha = new THREE.Mesh(geometrymecha, materialmecha);
//scene.add(meshmecha);
meshmecha.position.set(0,14.5,0);
 
//fuego veladora 🔥
var geometryfuego= new THREE.ConeGeometry(2,5,10,10);
var materialfuego = new THREE.MeshLambertMaterial({
    color:0xB30705,
    side: THREE.DoubleSide,
});
var meshfuego = new THREE.Mesh(geometryfuego, materialfuego);
//scene.add(meshfuego);
meshfuego.position.set(0,33,0);
// ESFERA FUEGO
var geometryE= new THREE.SphereGeometry(2,20,20,0,Math.PI*2,0,Math.PI/2);
var materialE = new THREE.MeshLambertMaterial({
    color:0xB30705,
    side: THREE.DoubleSide,
});
var meshE = new THREE.Mesh(geometryE, materialE);
//scene.add(meshE);
meshE.position.set(0,30.5,0);
meshE.rotation.set(Math.PI,0,0);
//ESFERA TRANSPARENTE 
var geometryET= new THREE.SphereGeometry(2.5,20,20,0,Math.PI*2,0,Math.PI/2);
var materialET = new THREE.MeshLambertMaterial({
    color:0xffff00,transparent:true,opacity : 0.5
});
var meshET = new THREE.Mesh(geometryET, materialET);
//scene.add(meshET);
meshET.position.set(0,30.5,0);
meshET.rotation.set(Math.PI,0,0);

//FUEGO transparente 🔥
var geometryFT= new THREE.ConeGeometry(2.5,6,11,11);
var materialFT = new THREE.MeshLambertMaterial({
    color:0xffff00,transparent:true,opacity : 0.5
   });
var meshFT = new THREE.Mesh(geometryFT, materialFT);
//scene.add(meshFT);
meshFT.position.set(0,33,0);



const ESC03B = new THREE.Group();
ESC03B.add(meshvela,meshvaso,meshmecha,meshfuego,meshFT,meshET,meshE);
ESC03B.position.set(x,y,z);

return ESC03B;
    
}