export namespace BBB {
  export interface ACTU {
    id:number,
    title: string,
    date: Date,
    content: string,
    img: string
  }
  export interface POLE {
    id: number,
    role: string,
    team: string,
    prenom: string,
    nom: string,
    img: string
  }
  export interface section{
    id: number;
    title: string;
    description: string;
  }
  export interface team{
    id: number;
    nom: string;
    photo: string;
    section: number;
  }
  export interface album{
    id: number;
    titre: string;
    description: string;
    couverture: string
  }
}