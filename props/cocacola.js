import * as THREE from "../js/three.module.js";

export default function ESC07PP({x, y, z}) {

    const ESC07PP = new THREE.Group();

    var geometryC = new THREE.CylinderGeometry(0.2, 0.18, 0.6, 16);
    var materialC = new THREE.MeshLambertMaterial({ color: 0x1A0D00 });
    var meshC = new THREE.Mesh(geometryC, materialC);
    meshC.position.set(0, 0.3, 0);
    ESC07PP.add(meshC);

    var geometryE = new THREE.CylinderGeometry(0.205, 0.205, 0.25, 16);
    var materialE = new THREE.MeshLambertMaterial({ color: 0xDD0000 }); // Rojo Coca-Cola
    var meshE = new THREE.Mesh(geometryE, materialE);
    meshE.position.set(0, 0.35, 0);
    ESC07PP.add(meshE);

    var geometryH = new THREE.SphereGeometry(0.2, 16, 16);
    var materialH = new THREE.MeshLambertMaterial({ color: 0x1A0D00 });
    var meshH = new THREE.Mesh(geometryH, materialH);
    meshH.scale.set(1, 0.6, 1);
    meshH.position.set(0, 0.6, 0);
    ESC07PP.add(meshH);

    var geometryCu = new THREE.CylinderGeometry(0.08, 0.12, 0.3, 16);
    var materialCu = new THREE.MeshLambertMaterial({ color: 0x1A0D00 });
    var meshCu = new THREE.Mesh(geometryCu, materialCu);
    meshCu.position.set(0, 0.8, 0);
    ESC07PP.add(meshCu);

    var geometryCo = new THREE.CylinderGeometry(0.09, 0.09, 0.06, 12);
    var materialCo = new THREE.MeshLambertMaterial({ color: 0xCC0000 }); // Rojo tapa
    var meshCo = new THREE.Mesh(geometryCo, materialCo);
    meshCo.position.set(0, 0.98, 0);
    ESC07PP.add(meshCo);

    ESC07PP.position.set(x, y, z);

    return ESC07PP;
}