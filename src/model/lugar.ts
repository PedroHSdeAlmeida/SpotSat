  export default class Lugar {
    id: number;
    nome: string;
    ponto: Point;
  
    constructor(id: number, nome: string, ponto: Point) {
      this.id = id;
      this.nome = nome;
      this.ponto = ponto;
    }
  }
  