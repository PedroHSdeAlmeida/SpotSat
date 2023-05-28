export default class Area {
    id: number;
    nome: string;
    poligono: Geometry;
  
    constructor(id: number, nome: string, poligono: Geometry) {
      this.id = id;
      this.nome = nome;
      this.poligono = poligono;
    }
  }
  