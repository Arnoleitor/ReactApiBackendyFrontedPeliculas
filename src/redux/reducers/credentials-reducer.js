import { LOGIN, LOGOUT, UPDATE_USER, PEDIDO_PELICULA } from '../types';

const initialState = {
    user: {},
    token: ''

};

const credentialsReducer = (state = initialState, action) => {
    switch (action.type) {
        //añadido de datos
        case LOGIN:
            return action.payload;

        //reestablecimiento o borrado de datos
        case LOGOUT:
            return initialState;


        case UPDATE_USER:
            return { ...state, user: action.payload }; //emn user metes en este caso el body
        default:
            return state

    }
}
export default credentialsReducer;