import type Postagem from "./Postagem";

export default interface Tema {
    id: number;
    titulo: string;
    texto: string;
    postagem?: Postagem[] | null;
}