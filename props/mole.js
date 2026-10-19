import * as THREE from "../js/three.module.js";
export default function ESC06B({x,y,z}){

    // plato 
var geometryplato = new THREE.CylinderGeometry(3.5,1.5,2,24);
var materialplato = new THREE.MeshLambertMaterial( {
     color: 0x0F005C 
    } );

var meshplato = new THREE.Mesh( geometryplato, materialplato );
//scene.add( meshplato );
meshplato.position.set(10,2,0);

//chile mole
var geometrychile = new THREE.CylinderGeometry(3,1,2,24);
var materialchile = new THREE.MeshLambertMaterial( {
     color: 0x571705
    } );

var meshchile = new THREE.Mesh( geometrychile, materialchile );
//scene.add( meshchile );
meshchile.position.set(10,2.1,0);
//pollo 
var geometrypollo = new THREE.CapsuleGeometry(.8,.6,10,15,4);
var materialpollo = new THREE.MeshLambertMaterial( {
     color: 0x2F040D
    } );

var meshpollo = new THREE.Mesh( geometrypollo, materialpollo );
//scene.add( meshpollo );
meshpollo.position.set(10,3,0);
meshpollo.rotation.set(Math.PI/2,0,0);
//hueso 
var geometryhue = new THREE.CapsuleGeometry(.2,1.5,10,20,1);
var materialhue = new THREE.MeshLambertMaterial( {
     color: 0xFCE48D
    } );

var meshhue = new THREE.Mesh( geometryhue, materialhue );
//scene.add( meshhue );
meshhue.position.set(10,3,1.5);
meshhue.rotation.set(Math.PI/2,0,0);
//hueso dos 🦴
var geometryhuesos= new THREE.SphereGeometry(.3,32,22);
var materialhuesos = new THREE.MeshLambertMaterial({
    color:0xFCE48D,
    side: THREE.DoubleSide,
});
var meshhuesos = new THREE.Mesh(geometryhuesos, materialhuesos);
//scene.add(meshhuesos);
meshhuesos.position.set(10.1,3,2.2);
// huesos 
var geometryhuesos1= new THREE.SphereGeometry(.3,32,22);
var materialhuesos1 = new THREE.MeshLambertMaterial({
    color:0xFCE48D,
    side: THREE.DoubleSide,
});
var meshhuesos1 = new THREE.Mesh(geometryhuesos1, materialhuesos1);
//scene.add(meshhuesos1);
meshhuesos1.position.set(9.9,3,2.2);

const ESC06B = new THREE.Group();
ESC06B.add(meshplato,meshchile,meshpollo,meshhue,meshhuesos,meshhuesos1);
ESC06B.position.set(x,y,z);

return ESC06B;
    
}