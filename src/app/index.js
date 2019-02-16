import { createStore, combineReducers, applyMiddleware } from 'redux';

const MathInitialState = {
    val: 0,
    history: []
};

const MathReducer = ( state = MathInitialState, action ) => {
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

const UserInitialReducer = {
    name: "Hossam",
    age: 22
};

const UserReducer = ( state = UserInitialReducer, action ) => {
    let newState = {
        ...state
    }
    switch( action.type ) {
        case "UPDATE_NAME":
            newState.name = action.payload;
            break;
        case "UPDATE_AGE":
            newState.age = action.payload;
            break;
    }
    return newState;
}

const myMiddleware = ( store ) => ( next ) => ( action ) => {
    console.log( "Action", action );
    next( action );
};

const Store = createStore(
    combineReducers( { MathReducer, UserReducer } ),
    {},
    applyMiddleware( myMiddleware )
);

Store.subscribe( () => {
    // console.log( "Updated state", Store.getState() );
} );

Store.dispatch( {
    type: "ADD",
    payload: 4
} );

Store.dispatch( {
    type: "ADD",
    payload: 9
} );

Store.dispatch( {
    type: "UPDATE_NAME",
    payload: "Ismail"
} );

Store.dispatch( {
    type: "UPDATE_AGE",
    payload: "24"
} );
