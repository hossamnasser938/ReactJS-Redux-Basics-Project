import React from 'react';

export const AdjustPreferences = ( props ) => {
    return(
        <div>
          <h2>Adjust Preferences</h2>
          <button onClick={ (props.notifications)? props.DISABLE_NOTIFICATIONS: props.ENABLE_NOTIFICATIONS }>{ (props.notifications)? "Disable": "Enable" } Notifications</button>
        </div>
    );
};
