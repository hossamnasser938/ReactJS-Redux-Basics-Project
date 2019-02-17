import React from 'react';

export const ShowPreferences = ( props ) => {
    return(
        <div>
          <h2>Current Preferences</h2>
          <p>Notifications: { ( props.notifications )? "Enabled": "Disabled" }</p>
        </div>
    );
};
