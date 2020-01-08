import { epsilon } from './assist';
import { ConflictList } from './conflictList';

export class Vertex {
  public x: number;
  public y: number;
  public z: number;
  public weight: number;
  public index: number;
  public conflicts: any;
  public neighbours: any;
  public nonClippedPolygon: any;
  public polygon: any;
  public originalObject: any;
  public isDummy: boolean;

  constructor(x, y, z, weight?, orig?, isDummy?) {
    this.x = x;
    this.y = y;
    this.weight = epsilon;
    this.index = 0;
    this.conflicts = new ConflictList(false);
    this.neighbours = null; // Potential trouble
    this.nonClippedPolygon = null;
    this.polygon = null;
    this.originalObject = null;
    this.isDummy = false;

    if (orig !== undefined) {
      this.originalObject = orig;
    }
    if (isDummy != undefined) {
      this.isDummy = isDummy;
    }
    if (weight != null) {
      this.weight = weight;
    }
    if (z != null) {
      this.z = z;
    } else {
      this.z = this.projectZ(this.x, this.y, this.weight);
    }
  }

  public projectZ(x, y, weight) {
    return x * x + y * y - weight;
  }

  public setWeight(weight) {
    this.weight = weight;
    this.z = this.projectZ(this.x, this.y, this.weight);
  }

  public subtract(v) {
    return new Vertex(v.x - this.x, v.y - this.y, v.z - this.z);
  }

  public crossproduct(v) {
    return new Vertex(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
  }

  public equals(v) {
    return this.x === v.x && this.y === v.y && this.z === v.z;
  }
}