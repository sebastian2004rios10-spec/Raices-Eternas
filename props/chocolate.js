import * as THREE from "../js/three.module.js";
export default function ESC01J ({x,y,z}){
    

//CHOCOLATE 

var geometry11 = new THREE.BoxGeometry(7,10,2,4,4,4);
var material11 = new THREE.MeshLambertMaterial({
    color:0x5E390C,
    side: THREE.DoubleSide
   
});
var mesh11 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh11);
mesh11.position.set(0,10,0)


var geometry12 = new THREE.BoxGeometry(2,2,2,4,4,4);
var material12 = new THREE.MeshLambertMaterial({
    color:0x6B4512,
   side: THREE.DoubleSide
   
});
var mesh12 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh12);
mesh12.position.set(0,13,0)


var geometry13 = new THREE.BoxGeometry(2,2,2,4,4,4);
var material13 = new THREE.MeshLambertMaterial({
    color:0x6B4512,
   side: THREE.DoubleSide
   
});
var mesh13 = new THREE.Mesh(geometry13,material13);
//scene.add(mesh13);
mesh13.position.set(0,10,0)


var geometry14 = new THREE.BoxGeometry(2,2,2,4,4,4);
var material14 = new THREE.MeshLambertMaterial({
    color:0x6B4512,
   side: THREE.DoubleSide
   
});
var mesh14 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh14);
mesh14.position.set(0,7,0)

var geometry15 = new THREE.BoxGeometry(8,5,3.2,4,4,4);
var material15 = new THREE.MeshLambertMaterial({
    color:0xAB0707,
   side: THREE.DoubleSide
   
});
var mesh15 = new THREE.Mesh(geometry15,material15);
//scene.add(mesh15);
mesh15.position.set(0,7,0)


var TRES = new THREE.Group();
TRES.add(mesh12,mesh13,mesh14);
//scene.add(TRES);
TRES.position.set(0.5,0,0);

var CUATRO = TRES.clone();
//scene.add(CUATRO);
CUATRO.position.set(0,0,0);

const ESC01J = new THREE.Group();
ESC01J.add(mesh11,mesh15,TRES,CUATRO);
ESC01J.position.set(x,y,z);


return ESC01J;

}







