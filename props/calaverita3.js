
import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"
import * as THREE from "../js/three.module.js";

export default function ESC07J ({x,y,z}){
    

//CALAVERITA 
var geometry01 = new THREE.SphereGeometry(4);
var material01 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,5,0)

var geometry02 = new THREE.SphereGeometry(2.5);
var material02 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(-0,4,3)



var geometry03 = new THREE.SphereGeometry(1);
var material03 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(-1,7,3)

var geometry04 = new THREE.SphereGeometry(1 );
var material04 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(1,7,3)

var geometry05 = new RoundedBoxGeometry(2,5,2,5,1);
var material05 = new THREE.MeshLambertMaterial({
    color:0xFFFFFF,
    side: THREE.DoubleSide});

var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.position.set(-0,5.2,4)
mesh05.rotation.set(0,0,Math.PI/2);

var geometry06 = new RoundedBoxGeometry(0.3,1,0.3,1,1);
var material06 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide});

var mesh06 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh06);
mesh06.position.set(0,3.6,5.5)


var geometry07 = new RoundedBoxGeometry(0.3,1,0.3,1,1);
var material07 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide});

var mesh07 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh07);
mesh07.position.set(1,3.6,5.5)

var geometry08 = new RoundedBoxGeometry(0.3,1,0.3,1,1);
var material08 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide});

var mesh08 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh08);
mesh08.position.set(-1,3.6,5.5)

var geometry09 = new RoundedBoxGeometry(0.3,2,0.3,2,1);
var material09 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide});

var mesh09 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh09);
mesh09.position.set(-0,3.6,5.5)
mesh09.rotation.set(0,0,Math.PI/2);

var geometry10 = new THREE.TorusKnotGeometry(0.5,1,40,40);
var material10 = new THREE.MeshLambertMaterial({
    color:0x4CBD0B,
    side: THREE.DoubleSide
   // wireframe: true 
});
var mesh10 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh10);
mesh10.position.set(0,8.2,0)


const ESC07J= new THREE.Group();
ESC07J.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10);
ESC07J.position.set(x,y,z);


return ESC07J;

}




