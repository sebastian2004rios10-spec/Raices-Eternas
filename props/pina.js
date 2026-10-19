import * as THREE from "../js/three.module.js";

export default function ESC05({x, y, z}) {

    const ESC05 = new THREE.Group();


    var geometry25 = new THREE.SphereGeometry(0.4, 16, 16);
    var material25 = new THREE.MeshLambertMaterial({ color: 0xEEF205});
    var mesh25 = new THREE.Mesh(geometry25, material25);
    geometry25.scale(0.8, 0.8, 0.8);
    mesh25.position.set(0, 0.4, 0);
    ESC05.add(mesh25);


    var geometry26 = new THREE.ConeGeometry(0.1, 0.4, 8);
    var material26 = new THREE.MeshLambertMaterial({ color: 0x2E8B57 });
    var mesh26 = new THREE.Mesh(geometry26, material26);
    mesh26.position.set(0, 0.8, 0);
    ESC05.add(mesh26);

 
    var mesh27 = new THREE.Mesh(geometry26, material26);
    mesh27.position.set(-0.12, 0.8, 0);
    mesh27.rotation.z = 0.3;
    ESC05.add(mesh27);


    var mesh28 = new THREE.Mesh(geometry26, material26);
    mesh28.position.set(0.12, 0.8, 0);
    mesh28.rotation.z = -0.3;
    ESC05.add(mesh28);
    ESC05.position.set(x, y, z);

    return ESC05;
}