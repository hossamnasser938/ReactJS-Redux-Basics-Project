import React from 'react';
import { connect } from 'react-redux';

const AdjustPreferences = ( props ) => {
    return(
        <div>
          <h2>Adjust Preferences</h2>
          <button onClick={ (props.notifications)? props.DISABLE_NOTIFICATIONS: props.ENABLE_NOTIFICATIONS }>{ (props.notifications)? "Disable": "Enable" } Notifications</button>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    return {
        notifications: state.notifications
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        ENABLE_NOTIFICATIONS: () => {
            dispatch( {
                type: "ENABLE_NOTIFICATIONS"
            } );
        },
        DISABLE_NOTIFICATIONS: () => {
            dispatch( {
              type: "DISABLE_NOTIFICATIONS"
            } );
        }
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( AdjustPreferences );
