import * as THREE from "../js/three.module.js";

export default function ESC06P({x, y, z}) {

    const ESC06 = new THREE.Group();


    var geometry20 = new THREE.SphereGeometry(0.45, 16, 16);
    var material20 = new THREE.MeshLambertMaterial({color: 0xC4D63B});
    var mesh20 = new THREE.Mesh(geometry20, material20);
    mesh20.scale.set(0.5, 0.5, 0.5);
    mesh20.position.set(0, 0.5, 0);
    ESC06.add(mesh20);

    var geometry21 = new THREE.SphereGeometry(0.3, 16, 16);
    var material21 = new THREE.MeshLambertMaterial({color: 0x2E8B57});
    var mesh21 = new THREE.Mesh(geometry21, material20);
    mesh21.scale.set(0.4, 0.4, 0.4);
    mesh21.position.set(0, 0.8, 0);
    ESC06.add(mesh21);

    
    var geometry22 = new THREE.CylinderGeometry(0.04, 0.05, 0.35, 8);
    var material22 = new THREE.MeshLambertMaterial({color: 0x4A2E00});
    var mesh22 = new THREE.Mesh(geometry22, material22);
    mesh22.scale.set(0.8, 0.5, 0.8);
    mesh22.position.set(0, 1, 0);
    mesh22.rotation.z = 0.1;
    ESC06.add(mesh22);
    ESC06.position.set(x, y, z);

    return ESC06;
}