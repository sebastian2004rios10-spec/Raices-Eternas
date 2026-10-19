import * as THREE from "../js/three.module.js";

export default function ESC08P({x, y, z}) {

    const ESC08P = new THREE.Group();

//cajetilla
    var geometry031 = new THREE.BoxGeometry(0.35, 0.45, 0.18);
    var material031 = new THREE.MeshLambertMaterial({ color: 0xC40000 });
    var mesh031 = new THREE.Mesh(geometry031, material031);
    mesh031.position.set(0.12, 0.22, 0);
    ESC08P.add(mesh031);

    var geometry032 = new THREE.BoxGeometry(0.36, 0.15, 0.20);
    var material032 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mesh032 = new THREE.Mesh(geometry032, material032);
    mesh032.position.set(0.12, 0.18, 0);
    ESC08P.add(mesh032);

    var geometry033 = new THREE.BoxGeometry(0.384, 0.12, 0.202);
    var material033 = new THREE.MeshLambertMaterial({ color: 0xC40000 });
    var mesh033 = new THREE.Mesh(geometry033, material033);
    mesh033.position.set(0.12, 0.40, -0.06);
    mesh033.rotation.x = -0.4;
    ESC08P.add(mesh033);

//cigarros
    var geometry1 = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    var material1 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var mesh11 = new THREE.Mesh(geometry1, material1);
    mesh11.position.set(0, 0.4, 0);
    ESC08P.add(mesh11);

    var geometry2 = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    var material2 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });  
    var mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.set(0.05, 0.4, 0);
    ESC08P.add(mesh2);

    var geometry3 = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    var material3 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });    
    var mesh3 = new THREE.Mesh(geometry3, material3);
    mesh3.position.set(0.10, 0.4, 0);
    ESC08P.add(mesh3);

    var geometry4 = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    var material4 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });    
    var mesh4 = new THREE.Mesh(geometry4, material4);
    mesh4.position.set(0.15, 0.4, 0);
    ESC08P.add(mesh4);

    var geometry5 = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    var material5 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });   
    var mesh5 = new THREE.Mesh(geometry5, material5);
    mesh5.position.set(0.20, 0.4, 0);
    ESC08P.add(mesh5);

    var geometry6 = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
    var material6 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });   
    var mesh6 = new THREE.Mesh(geometry6, material6);
    mesh6.position.set(0.25, 0.4, 0);
    ESC08P.add(mesh6);
    

    ESC08P.position.set(x, y, z);

    return ESC08P;
}