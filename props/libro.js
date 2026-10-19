import * as THREE from "../js/three.module.js";
export default function ESC03J ({x,y,z}){
    


var geometry22 = new THREE.BoxGeometry(5,6,2,4,4,4);
var material22 = new THREE.MeshLambertMaterial({
    color:0x6B4512,
   side: THREE.DoubleSide
   
});
var mesh22 = new THREE.Mesh(geometry22,material22);
//scene.add(mesh22);
mesh22.position.set(-2,7,1)

var geometry23= new THREE.BoxGeometry(5,6.2,1.5,4,4,4);
var material23 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
   side: THREE.DoubleSide
   
});
var mesh23 = new THREE.Mesh(geometry23,material23);
//scene.add(mesh23);
mesh23.position.set(-1.8,7,1)

var geometry24 = new THREE.BoxGeometry(2,2,2,4,4,4);
var material24 = new THREE.MeshLambertMaterial({
    color:0xEDF505,
   side: THREE.DoubleSide
   
});
var mesh24 = new THREE.Mesh(geometry24,material24);
//scene.add(mesh24);
mesh24.position.set(-1.8,8,1.2)
mesh24.rotation.set(0,Math.PI/2,0);





const  ESC03J = new THREE.Group();
ESC03J.add(mesh22,mesh23,mesh24);
ESC03J.position.set(x,y,z);


return ESC03J;

}

