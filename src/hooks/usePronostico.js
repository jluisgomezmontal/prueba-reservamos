// Hook encargado de agregar objetos al arreglo de ciudades

export const usePronostico = (state=[], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload]
    
        default:
            return state;
    }
}