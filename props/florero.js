import * as THREE from "../js/three.module.js";
export default function ESC05B({x,y,z}){

//florero 

var geometryFlorero = new THREE.CylinderGeometry(1.7,1.5,6.8,30,30 );
var materialFlorero = new THREE.MeshLambertMaterial({
    color:0x279FF5,
    side: THREE.DoubleSide });
var meshFlorero = new THREE.Mesh(geometryFlorero,materialFlorero);
//scene.add(meshFlorero);
meshFlorero.position.set(0,4,0);

var geometryFlorero1 = new THREE.CylinderGeometry(2,2,8,30,30 );
var materialFlorero1 = new THREE.MeshLambertMaterial({
    color:0xf0000,
    transparent: true, opacity:0.3 });
var meshFlorero1 = new THREE.Mesh(geometryFlorero1,materialFlorero1);
//scene.add(meshFlorero1);
meshFlorero1.position.set(0,4,0);

/*const ESC01S = new THREE.Group();
ESC01S.add(meshFlorero,meshFlorero1);
ESC01S.position.set(x,y,z); 

return ESC01S;*/

//flor cempasuchil naranja// grande 
var cempa = new THREE.TorusKnotGeometry(.5,0.3,150,6,20,11);
var cempamate = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempa = new THREE.Mesh(cempa,cempamate);
meshcempa.position.set(0,9,0);
meshcempa.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa);

// tallo flor // grande 
var geometrytallo= new THREE.CylinderGeometry(0.1,0.1,8,30,30);
var materialtallo = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshDel = new THREE.Mesh(geometrytallo, materialtallo);
//scene.add(meshDel);
meshDel.position.set(0,5,);


//flor cempasuchil naranja// chico
var cempa1 = new THREE.TorusKnotGeometry(.3,0.2,150,6,20,11);
var cempamate1 = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempa1 = new THREE.Mesh(cempa1,cempamate1);
meshcempa1.position.set(.9,8.5,.8);
meshcempa1.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa1);
// tallo flor // chico 

var geometrytallo1= new THREE.CylinderGeometry(0.1,0.1,7,30,30);
var materialtallo1 = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshDel1 = new THREE.Mesh(geometrytallo1, materialtallo1);
//scene.add(meshDel);
meshDel1.position.set(.9,5,.8);
//flor 🏵️
var flor01B = new THREE.TorusKnotGeometry(.3,0.2,150,6,20,11);
var materialflor01B = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempasu = new THREE.Mesh(flor01B,materialflor01B);
meshcempasu.position.set(-.9,8.5,.8);
meshcempasu.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa1);
// tallo flor // grande 

var geometrytallo01B= new THREE.CylinderGeometry(0.1,0.1,7,30,30);
var materialtallo01B = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshtallo01B = new THREE.Mesh(geometrytallo01B, materialtallo01B);
//scene.add(meshtallo01B);
meshtallo01B.position.set(-.9,5,.8);

//flor02🏵️🏵️
var flor02B = new THREE.TorusKnotGeometry(.3,0.2,150,6,20,11);
var materialflor02B = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempa2 = new THREE.Mesh(flor02B,materialflor02B);
meshcempa2.position.set(-.9,8.5,-.8);
meshcempa2.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa2);
// tallo flor // grande 

var geometrytallo02B= new THREE.CylinderGeometry(0.1,0.1,7,30,30);
var materialtallo02B = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshtallo02B = new THREE.Mesh(geometrytallo02B, materialtallo02B);
//scene.add(meshtallo02B);
meshtallo02B.position.set(-.9,5,-.8);
//flor03 🏵️
var flor03B = new THREE.TorusKnotGeometry(.3,0.2,150,6,20,11);
var materialflor03B = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempa3 = new THREE.Mesh(flor03B,materialflor03B);
meshcempa3.position.set(.9,8.5,-.8);
meshcempa3.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa3);
// tallo flor // grande 

var geometrytallo03B= new THREE.CylinderGeometry(0.1,0.1,7,30,30);
var materialtallo03B = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshtallo03B = new THREE.Mesh(geometrytallo03B, materialtallo03B);
//scene.add(meshtallo03B);
meshtallo03B.position.set(.9,5,-.8);

//flor04 🏵️
var flor04B = new THREE.TorusKnotGeometry(.3,0.2,150,6,20,11);
var materialflor04B = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempa4 = new THREE.Mesh(flor04B,materialflor04B);
meshcempa4.position.set(0,8,-.8);
meshcempa4.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa4);
// tallo flor // grande 

var geometrytallo04B= new THREE.CylinderGeometry(0.1,0.1,5,30,30);
var materialtallo04B = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshtallo04B = new THREE.Mesh(geometrytallo04B, materialtallo04B);
//scene.add(meshtallo04B);
meshtallo04B.position.set(0,5.7,-.8);

//flor05 🏵️
var flor05B = new THREE.TorusKnotGeometry(.3,0.2,150,6,20,11);
var materialflor05B = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempa5 = new THREE.Mesh(flor05B,materialflor05B);
meshcempa5.position.set(0,8,.8);
meshcempa5.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa5);
// tallo flor // grande 

var geometrytallo05B= new THREE.CylinderGeometry(0.1,0.1,5,30,30);
var materialtallo05B = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshtallo05B = new THREE.Mesh(geometrytallo05B, materialtallo05B);
//scene.add(meshtallo05B);
meshtallo05B.position.set(0,5.7,.8);

//Flore06 🏵️
var flor06B = new THREE.TorusKnotGeometry(.3,0.2,150,6,20,11);
var materialflor06B = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempa6 = new THREE.Mesh(flor06B,materialflor06B);
meshcempa6.position.set(1,8,0);
meshcempa6.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa6);
// tallo flor // grande 

var geometrytallo06B= new THREE.CylinderGeometry(0.1,0.1,5,30,30);
var materialtallo06B = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshtallo06B = new THREE.Mesh(geometrytallo06B, materialtallo06B);
//scene.add(meshtallo06B);
meshtallo06B.position.set(1,5.7,0);

//flor07🏵️
var flor07B = new THREE.TorusKnotGeometry(.3,0.2,150,6,20,11);
var materialflor07B = new THREE.MeshLambertMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcempa7 = new THREE.Mesh(flor07B,materialflor07B);
meshcempa7.position.set(-1,8,0);
meshcempa7.rotation.set(Math.PI/2,0,0);
//scene.add(meshcempa7);
// tallo flor // grande 

var geometrytallo07B= new THREE.CylinderGeometry(0.1,0.1,5,30,30);
var materialtallo07B = new THREE.MeshLambertMaterial({
    color:0x146B3A,
    side: THREE.DoubleSide,
});
var meshtallo07B = new THREE.Mesh(geometrytallo07B, materialtallo07B);
//scene.add(meshtallo07B);
meshtallo07B.position.set(-1,5.7,0);


const ESC05B = new THREE.Group();
ESC05B.add(meshFlorero,meshcempa,meshDel,meshcempa1,meshDel1,meshcempasu,meshtallo01B,meshcempa2,meshtallo02B,
meshcempa3,
meshtallo03B,
meshcempa4,
meshtallo04B,
meshcempa5,
meshtallo05B,
meshcempa6,
meshtallo06B,
meshcempa7,
meshtallo07B,);
ESC05B.position.set(x,y,z);

return ESC05B;
    
}