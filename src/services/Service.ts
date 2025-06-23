import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

export const cadastroUsuario = async (url: string, dados: object, setDados: any) => {
    try {
        const resposta = await api.post(url, dados);
        setDados(resposta.data);
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
    }
};

export const login = async(url: string, dados: Object, setDados: Function) =>{
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}