import { Point } from "geojson";
  
  export default class place {
    id: number;
    nome: string;
    ponto: Point;
  
    constructor(nome: string, ponto: Point) {
      this.nome = nome;
      this.ponto = ponto;
    }
  }
  