import { createStore } from 'redux';

const initialState = {
    val: 0,
    history: []
};

const reducer = ( state = initialState, action ) => {
    let newState = {
        ...state,
        history: [...state.history]
    }

    switch( action.type ) {
        case "ADD":
            newState.val += action.payload;
            newState.history.push( action.payload );
            break;
        case "ADD":
            newState.val -= action.payload;
            newState.history.push( action.payload );
            break;
    }

    return newState;
};

const store = createStore( reducer );

store.subscribe( () => {
    console.log( "Updated state", store.getState() );
} );

store.dispatch( {
    type: "ADD",
    payload: 4
} );

store.dispatch( {
    type: "ADD",
    payload: 9
} );

store.dispatch( {
    type: "SUBTRACT",
    payload: 3
} );
