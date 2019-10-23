import { 
    MODIFICA_TITULO, 
    MODIFICA_DESCRICAO,
    MODIFICA_BUSCA,
    MODIFICA_LISTA,
    MODIFICA_DONE,
    EDITA_TODO,
    CLEAR_ALL
} from '../types/Types';

export const modificaTitulo = (texto) => {
    return {
        type: MODIFICA_TITULO,
        payload: texto
    }
}
export const modificaDescricao = (texto) => {
    return {
        type: MODIFICA_DESCRICAO,
        payload: texto
    }
}
export const modificaBusca = (texto) => {
    return {
        type: MODIFICA_BUSCA,
        payload: texto
    }
}
export const modificaLista = (lista) => {
    return {
        type: MODIFICA_LISTA,
        payload: lista
    }
}
export const modificaDone = (made) => {
    return {
        type: MODIFICA_DONE,
        payload: made
    }
}
export const editaTodo = (id, titulo, descricao, made) => {
    return {
        type: EDITA_TODO,
        payload: {
            id:id,
            titulo:titulo,
            descricao:descricao,
            made:made
        }
    }
}
export const clearAll = () => {
    return {
        type: CLEAR_ALL,
        payload: {
            id:'',
            titulo:'',
            descricao:'',
            made:0
        }
    }
}