import * as THREE from "../js/three.module.js";
export default function ESC02S ({x,y,z}){



//OBJETOS  ✏️✏️✏️✏️  🪶

//CRUZ

var geometrycruz01 = new THREE.BoxGeometry(2, 45, 2);
var materialcruz01 = new THREE.MeshLambertMaterial({ color: 0x701705, side: THREE.DoubleSide });
var meshcruz01 = new THREE.Mesh(geometrycruz01,materialcruz01);
//scene.add(meshcruz01);
meshcruz01.position.set(0,15,0);

var geometrycruz02 = new THREE.BoxGeometry(20, 2, 2);
var materialcruz02 = new THREE.MeshLambertMaterial({ color: 0x701705, side: THREE.DoubleSide });
var meshcruz02 = new THREE.Mesh(geometrycruz02,materialcruz02);
//scene.add(meshcruz02);
meshcruz02.position.set(0,28,0);

const ESC02S = new THREE.Group();
ESC02S.add(meshcruz01,meshcruz02);
ESC02S.position.set(x,y,z); 

return ESC02S;


}