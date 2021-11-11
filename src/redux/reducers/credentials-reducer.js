import {LOGIN, LOGOUT, UPDATE_USER} from '../types';

const initialState = {
    user : {},
    token : ''
    
};

const credentialsReducer = (state = initialState, action) => {
    switch(action.type){
        //Ejemplo de añadido de datos
        case LOGIN :
            return action.payload;

        //Ejemplo de reestablecimiento o borrado de datos
        case LOGOUT : 
            return initialState;
            
        default :
            return state
    }
}
export default credentialsReducer;