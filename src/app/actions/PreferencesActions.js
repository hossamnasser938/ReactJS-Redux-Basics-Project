export const enableNotifications = () => {
    return ( dispatch ) => {
        setTimeout( () => {
            dispatch( {
                type: "ENABLE_NOTIFICATIONS"
            } );
        } , 3000 );
    }
}

export const disableNotifications = () => {
    return {
        type: "DISABLE_NOTIFICATIONS"
    }
}
