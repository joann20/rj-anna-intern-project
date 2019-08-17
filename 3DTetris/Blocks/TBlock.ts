/**
 * T-Block, 3 x 2
 * Drawn on major horizontal axis, top cube up
 */

class TBlock extends Block {
    private _cube2: BABYLON.InstancedMesh;
    private _cube3: BABYLON.InstancedMesh;
    private _cube4: BABYLON.InstancedMesh;

    constructor() {
        super(4);
        this.type = "t block";
        this.create();
        this.setCubes();
    }

    private create(): void {
        this.parentCube = this.createCube(4.5, 0); //middle, bottom

        var mat = new BABYLON.StandardMaterial("mat", scene);
        mat.diffuseColor = new BABYLON.Color3(0.7, 0.5, 0);
        mat.emissiveColor = new BABYLON.Color3(0.7, 0.3, 0); //orange
        this.parentCube.material = mat;
        this.parentCube.material.backFaceCulling = false;
        
        this._cube2 = this.becomeChild(this._cube2);
        this._cube2.position = new BABYLON.Vector3(-1, 0, 0); //left, bottom

        this._cube3 = this.becomeChild(this._cube3);
        this._cube3.position = new BABYLON.Vector3(1, 0, 0); //right, bottom

        this._cube4 = this.becomeChild(this._cube4);
        this._cube4.position = new BABYLON.Vector3(0, 1, 0); //middle, top
    }

    public getPositions(): BABYLON.Vector3[] {
        this.setPositions();
        return this.positions;
    }

    private setPositions(): void {
        this.uncouple();
        this.positions = [this.parentCube.position, this._cube2.position, this._cube3.position, this._cube4.position];
    }

    private setCubes(): void {
        this.cubes = [this._cube2, this._cube3, this._cube4];
    }
}