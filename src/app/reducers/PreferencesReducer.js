const initialPreferences = {
    notifications: false
}

const preferencesReducer = ( state = initialPreferences, action ) => {
    let copiedState = { ...state };

    switch ( action.type ) {
        case "ENABLE_NOTIFICATIONS":
            copiedState.notifications = true;
            break;
        case "DISABLE_NOTIFICATIONS":
            copiedState.notifications = false;
            break;
    }

    return copiedState;
};

export default preferencesReducer;
