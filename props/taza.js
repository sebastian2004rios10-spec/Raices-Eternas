import * as THREE from "../js/three.module.js";
export default function ESC02B({x,y,z}){

//taza 
var geometryT = new THREE.SphereGeometry(10,64,22);
var materialT = new THREE.MeshLambertMaterial({
    color:0x331D14,
    side: THREE.DoubleSide,

});
var meshT = new THREE.Mesh(geometryT, materialT);
//scene.add(meshT);
meshT.position.set(-30,10, 40);

//boca de taza 
var geometryBoca= new THREE.CylinderGeometry(10,7,7,20);
var materialBoca = new THREE.MeshLambertMaterial({
    color:0x947162,
    side: THREE.DoubleSide,

});
var meshBoca = new THREE.Mesh(geometryBoca, materialBoca);
//scene.add(meshBoca);
meshBoca.position.set(-30,18,40);
//cafe 
var geometryCafe= new THREE.CylinderGeometry(8,7,7,20);
var materialCafe = new THREE.MeshLambertMaterial({
    color:0x050200,
    side: THREE.DoubleSide,

});
var meshCafe = new THREE.Mesh(geometryCafe, materialCafe);
//scene.add(meshCafe);
meshCafe.position.set(-30,18.2,40);
//OREJA TAZA
var geometryOreja= new THREE.TorusGeometry(4,1.5,5,67,6);
var materialOreja = new THREE.MeshLambertMaterial({
    color:0x331D14,
    side: THREE.DoubleSide,


});
var meshOreja = new THREE.Mesh(geometryOreja, materialOreja);
//scene.add(meshOreja);
meshOreja.position.set(-40,15,40);


const ESC02B = new THREE.Group();
ESC02B.add(meshBoca,meshCafe,meshOreja,meshT);
ESC02B.position.set(x,y,z);

return ESC02B;
    
}