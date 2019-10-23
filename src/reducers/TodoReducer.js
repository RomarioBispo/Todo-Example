import {
    MODIFICA_TITULO,
    MODIFICA_DESCRICAO,
    MODIFICA_BUSCA,
    MODIFICA_LISTA,
    MODIFICA_DONE,
    EDITA_TODO,
    CLEAR_ALL
} from '../types/Types';

const INITIAL_STATE = {
    id:'',
    titulo:'',
    descricao:'',
    busca:'',
    made:0,
    lista:[]
};
export default (state=INITIAL_STATE, action) => {
    
    switch(action.type){
        case MODIFICA_TITULO:
            return {
                ...state, titulo:action.payload
            }
        case MODIFICA_DESCRICAO:
            return {
                ...state, descricao:action.payload
            }
        case MODIFICA_BUSCA:
            return {
                ...state, busca:action.payload
            }
        case MODIFICA_LISTA:{
            return {
                ...state, lista:action.payload
            }
        }
        case MODIFICA_DONE:{
            return {
                ...state, made:action.payload
            }
        }
        case EDITA_TODO:{
            return {
                ...state, id:action.payload.id, made:action.payload.made, titulo:action.payload.titulo, descricao:action.payload.descricao
            }
        }
        case CLEAR_ALL:{
            return {
                ...state, made:action.payload.made, titulo:action.payload.titulo, descricao:action.payload.descricao
            }
        }
    }
    
    return state;
}