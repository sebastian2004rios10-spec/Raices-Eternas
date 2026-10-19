import * as THREE from "../js/three.module.js";
export default function ESC01B({x,y,z}){

//BOTELLA DE TEQUILA CUERPO 🍾
var geometryBote= new THREE.CylinderGeometry(9,9,33,30,30);
var materialBote = new THREE.MeshLambertMaterial({
    color:0xFCBB22,
    side: THREE.DoubleSide,
});
var meshBote = new THREE.Mesh(geometryBote, materialBote);
//scene.add(meshBote);
meshBote.position.set(0,13,0);
//TRANSPARENTE BOLLETA 
var geometryTrans= new THREE.CylinderGeometry(10,10,33,30,30);
var materialTrans= new THREE.MeshLambertMaterial({
     color:0xFAFF61,transparent:true,opacity : 0.5
});
var meshTrans = new THREE.Mesh(geometryTrans, materialTrans);
//scene.add(meshTrans);
meshTrans.position.set(0,13,0);

//BOTELLA CIRCULO 
var geometryCir= new THREE.SphereGeometry(10,10,33,0,Math.PI*2.0,Math.PI/2);
var materialCir = new THREE.MeshLambertMaterial({
    color:0xFAFF61,transparent:true,opacity : 0.5
});
var meshCir = new THREE.Mesh(geometryCir, materialCir);
//scene.add(meshCir);
meshCir.position.set(0,29,0);
meshCir.rotation.set(Math.PI,0,0);


//BOTELLA CILINDRO DELGADO 
var geometryDel= new THREE.CylinderGeometry(3,3,10,30,30);
var materialDel = new THREE.MeshLambertMaterial({
    color:0x522D00,
    side: THREE.DoubleSide,
});
var meshDel = new THREE.Mesh(geometryDel, materialDel);
//scene.add(meshDel);
meshDel.position.set(0,45,0);

//BOTELLA CILINDRO DELGADO  transparente 
var geometryCi= new THREE.CylinderGeometry(3,3,4,30,30);
var materialCi = new THREE.MeshLambertMaterial({
    color:0xFAFF61,transparent:true,opacity : 0.5
});
var meshCi = new THREE.Mesh(geometryCi, materialCi);
//scene.add(meshCi);
meshCi.position.set(0,38,0);



const ESC01B = new THREE.Group();
ESC01B.add(meshBote, meshCi,meshCir,meshDel,meshTrans);
ESC01B.position.set(x,y,z);

return ESC01B;
    
}