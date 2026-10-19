import * as THREE from "../js/three.module.js";

export default function ESC04J ({x,y,z}){
    

    
//CARRO

var geometry16 = new THREE.BoxGeometry(9,4,15,4,4,4);
var material16 = new THREE.MeshLambertMaterial({
    color:0xE32293,
    side: THREE.DoubleSide
   
});
var mesh16 = new THREE.Mesh(geometry16,material16);
//scene.add(mesh16);
mesh16.position.set(0,10,0)


var geometry17 = new THREE.BoxGeometry(9,2,9,4,4,4);
var material17 = new THREE.MeshLambertMaterial({
    color:0xE32293,
    side: THREE.DoubleSide
   
});
var mesh17 = new THREE.Mesh(geometry17,material17);
//scene.add(mesh17);
mesh17.position.set(0,13,0)


var geometry18 = new THREE.TorusGeometry(2,1,20,20 );
var material18 = new THREE.MeshLambertMaterial({
    color:0x0A0204,
    side: THREE.DoubleSide,
   // wireframe: true 
});
var mesh18 = new THREE.Mesh(geometry18,material18);
//scene.add(mesh18);
mesh18.position.set(0,8,0)
mesh18.rotation.set(0,4.7,Math.PI/4);

var geometry19 = new THREE.TorusGeometry(2,1,20,20 );
var material19 = new THREE.MeshLambertMaterial({
    color:0x0A0204,
    side: THREE.DoubleSide,
   // wireframe: true 
});
var mesh19 = new THREE.Mesh(geometry19,material19);
//scene.add(mesh19);
mesh19.position.set(0,8,0)
mesh19.rotation.set(0,4.7,Math.PI/4);

var geometry20 = new THREE.TorusGeometry(2,1,20,20 );
var material20 = new THREE.MeshLambertMaterial({
    color:0x0A0204,
    side: THREE.DoubleSide,
   // wireframe: true 
});
var mesh20 = new THREE.Mesh(geometry20,material20);
//scene.add(mesh20);
mesh20.position.set(0,8,0)
mesh20.rotation.set(0,4.7,Math.PI/4);


var geometry21 = new THREE.TorusGeometry(2,1,20,20 );
var material21 = new THREE.MeshLambertMaterial({
    color:0x0A0204,
    side: THREE.DoubleSide,
   // wireframe: true 
});
var mesh21 = new THREE.Mesh(geometry21,material21);
//scene.add(mesh21);
mesh21.position.set(0,8,0)
mesh21.rotation.set(0,4.7,Math.PI/4);


var geometry25 = new THREE.SphereGeometry(1.3);
var material25 = new THREE.MeshLambertMaterial({
    color:0xF5E727,
    side: THREE.DoubleSide
});
var mesh25 = new THREE.Mesh(geometry25,material25);
//scene.add(mesh25);
mesh25.position.set(0,10,0)

var geometry26 = new THREE.SphereGeometry(1.3);
var material26 = new THREE.MeshLambertMaterial({
    color:0xF5E727,
    side: THREE.DoubleSide
});
var mesh26 = new THREE.Mesh(geometry26,material26);
//scene.add(mesh26);
mesh26.position.set(0,10,0)


var geometry27 = new THREE.BoxGeometry(8.5,1.5,9.2,4,4,4);
var material27 = new THREE.MeshLambertMaterial({
    color:0x27BBF5,
    side: THREE.DoubleSide
   
});
var mesh27 = new THREE.Mesh(geometry27,material27);
//scene.add(mesh27);
mesh27.position.set(0,13,0)





const ESC04J = new THREE.Group();
ESC04J.add(mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh25,mesh26,mesh27,);
ESC04J.position.set(x,y,z);


return ESC04J;

}