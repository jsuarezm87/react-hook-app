

export const todoReducer = ( state = [], { type, payload} ) => {

    switch ( type ) {
        case 'add':            
            return [ ...state, payload];

        case 'delete':
            return state.filter( todo => todo.id !== payload );

        case 'toggle':
            return state.map( todo =>
                ( todo.id === payload )
                    ? { ...todo, done: !todo.done }
                    : todo            
            );                      
        default:
            // Se llama cuando se inicializa
            return state;
    }

}