
import * as THREE from "../js/three.module.js";
export default function ESC06S({x,y,z}){

//flor naranja
var florNara = new THREE.TorusKnotGeometry(6,2,150,6,20,11);
var matNara = new THREE.MeshPhysicalMaterial({
    color:0xFF4500,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshNara = new THREE.Mesh(florNara,matNara);
meshNara.position.set(-60,6,0);
meshNara.rotation.set(Math.PI/2,0,0);
//scene.add(meshNara);

// flor de cempasuchil centro 🏵️
var florcem = new THREE.TorusKnotGeometry(5,2,110,18,18,11);
var matcem = new THREE.MeshPhysicalMaterial({
    color:0xD2691E,
    transeisson:5,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshcem = new THREE.Mesh(florcem,matcem);
meshcem.position.set(-60,8,0);
meshcem.rotation.set(Math.PI/2,0,0);
//scene.add(meshcem);

//flor morada 🌺
var flormorada = new THREE.TorusKnotGeometry(6,2,150,6,20,11);
var matmorada  = new THREE.MeshPhysicalMaterial({
    color:0x9932CC,
    transeisson:7,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshmorada = new THREE.Mesh(flormorada,matmorada);
meshmorada.position.set(-30,6,0);
meshmorada.rotation.set(Math.PI/2,0,0);
//scene.add(meshmorada);
// flor de cempasuchil centro morada 🏵️
var flormo = new THREE.TorusKnotGeometry(5,2,110,18,18,11);
var matmo = new THREE.MeshPhysicalMaterial({
    color:0x800080,
    transeisson:5,
    rouhgness:0,
    ior:1.5,
    tickness:0.5,
});
var meshmo = new THREE.Mesh(flormo,matmo);
meshmo.position.set(-30,8,0);
meshmo.rotation.set(Math.PI/2,0,0);
//scene.add(meshmo);





//vela
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
//grupo flores
var ESC = new THREE.Group();
ESC.add(meshNara, meshcem,meshmorada,meshmo);
//scene.add(ESC);
ESC.scale.set(-0.2, 0.2, 0.2);
ESC.position.set(-69,1,46);
//grupo vela 
var ESC1 = new THREE.Group();
ESC1.add(meshvela,meshvaso,meshmecha,meshfuego,meshFT,meshET,meshE);
//scene.add(ESC1);
ESC1.scale.set(0.3, 0.3, 0.3);
ESC1.position.set(-70,1,46);


//fila enfrente
var fila1 = ESC1.clone();
//scene.add(fila1);
fila1.position.set(-50,1,46);

var fila2 = ESC.clone();
//scene.add(fila2);
fila2.position.set(-49,1,46);

var fila3 = ESC1.clone();
//scene.add(fila3);
fila3.position.set(-30,1,46);

var fila4 = ESC.clone();
//scene.add(fila4);
fila4.position.set(-29,1,46);

var fila5 = ESC1.clone();
//scene.add(fila5);
fila5.position.set(-10,1,46);

var fila6 = ESC.clone();
//scene.add(fila6);
fila6.position.set(-9,1,46);

var fila7 = ESC1.clone();
//scene.add(fila7);
fila7.position.set(47,1,46);

var fila8 = ESC.clone();
//scene.add(fila8);
fila8.position.set(49,1,46);

var fila9 = ESC1.clone();
//scene.add(fila9);
fila9.position.set(27,1,46);

var fila10 = ESC.clone();
//scene.add(fila10);
fila10.position.set(29,1,46);

var fila11 = ESC1.clone();
//scene.add(fila11);
fila11.position.set(10,1,46);

var fila12 = ESC.clone();
//scene.add(fila12);
fila12.position.set(9,1,46);

var fila13 = ESC1.clone();
//scene.add(fila13);
fila13.position.set(69,1,46);

//fila atras

var fila14 = ESC1.clone();
//scene.add(fila14);
fila14.position.set(-69,1,-46);

var fila15 = ESC.clone();
//scene.add(fila15);
fila15.position.set(-70,1,-46);

var fila16 = ESC1.clone();
//scene.add(fila16);
fila16.position.set(-50,1,-46);

var fila17 = ESC.clone();
//scene.add(fila17);
fila17.position.set(-49,1,-46);

var fila18 = ESC1.clone();
//scene.add(fila18);
fila18.position.set(-30,1,-46);

var fila19 = ESC.clone();
//scene.add(fila19);
fila19.position.set(-29,1,-46);

var fila20 = ESC1.clone();
//scene.add(fila20);
fila20.position.set(-10,1,-46);

var fila21 = ESC.clone();
//scene.add(fila21);
fila21.position.set(-9,1,-46);

var fila22 = ESC1.clone();
//scene.add(fila22);
fila22.position.set(47,1,-46);

var fila23 = ESC.clone();
//scene.add(fila23);
fila23.position.set(49,1,-46);

var fila24 = ESC1.clone();
//scene.add(fila24);
fila24.position.set(27,1,-46);

var fila25 = ESC.clone();
//scene.add(fila25);
fila25.position.set(29,1,-46);

var fila26 = ESC1.clone();
//scene.add(fila26);
fila26.position.set(10,1,-46);

var fila27 = ESC.clone();
//scene.add(fila27);
fila27.position.set(9,1,-46);

var fila28 = ESC1.clone();
//scene.add(fila28);
fila28.position.set(69,1,-46);

//lado derecho
var fila29 = ESC.clone();
//scene.add(fila29);
fila29.rotation.set(0,Math.PI/2,0);
fila29.position.set(72,1,-26);

var fila30 = ESC1.clone();
//scene.add(fila30);
fila30.position.set(72,1,-23);

var fila31 = ESC.clone();
//scene.add(fila31);
fila31.rotation.set(0,Math.PI/2,0);
fila31.position.set(72,1,-4);

var fila32 = ESC1.clone();
//scene.add(fila32);
fila32.position.set(72,1,-2);

var fila33 = ESC.clone();
//scene.add(fila33);
fila33.rotation.set(0,Math.PI/2,0);
fila33.position.set(72,1,18);

var fila34 = ESC1.clone();
//scene.add(fila34);
fila34.position.set(72,1,20);

var fila35 = ESC.clone();
//scene.add(fila35);
fila35.rotation.set(0,Math.PI/2,0);
fila35.position.set(72,1,40);

//lado izquierdo
var fila36 = ESC.clone();
//scene.add(fila36);
fila36.rotation.set(0,Math.PI/2,0);
fila36.position.set(-72,1,-26);

var fila37 = ESC1.clone();
//scene.add(fila37);
fila37.position.set(-72,1,-23);

var fila38 = ESC.clone();
//scene.add(fila38);
fila38.rotation.set(0,Math.PI/2,0);
fila38.position.set(-72,1,-4);

var fila39 = ESC1.clone();
//scene.add(fila39);
fila39.position.set(-72,1,-2);

var fila40 = ESC.clone();
//scene.add(fila40);
fila40.rotation.set(0,Math.PI/2,0);
fila40.position.set(-72,1,18);

var fila41 = ESC1.clone();
//scene.add(fila41);
fila41.position.set(-72,1,20);

var fila42 = ESC.clone();
//scene.add(fila42);
fila42.rotation.set(0,Math.PI/2,0);
fila42.position.set(-72,1,40);


const ESC06S = new THREE.Group();
ESC06S.add(ESC,ESC1,fila1, fila2, fila3, fila4, fila5, fila6, fila7, fila8, fila9, fila10, fila11, fila12, fila13, fila14, fila15, fila16, fila17, fila18, fila19, fila20, fila21, fila22, fila23, fila24, fila25, fila26, fila27, fila28, fila29, fila30, fila31, fila32, fila33, fila34, fila35, fila36, fila37, fila38, fila39, fila40, fila41, fila42);
ESC06S.position.set(x,y,z);

return ESC06S;
    
}