import { createStore } from 'redux';

const initialState = 0;

const reducer = ( state, action ) => {
    let copiedState = state;

    switch( action.type ) {
        case "ADD":
            copiedState += action.payload;
            break;
        case "SUBTRACT":
            copiedState -= action.payload;
            break;
    }

    return copiedState;
};

const store = createStore( reducer, initialState );

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
