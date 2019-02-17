import React from 'react';
import { connect } from 'react-redux';

const ShowPreferences = ( props ) => {
    return(
        <div>
          <h2>Current Preferences</h2>
          <p>Notifications: { ( props.notifications )? "Enabled": "Disabled" }</p>
        </div>
    );
};

const mapStateToProps = ( state ) => {
    return {
        notifications: state.notifications
    }
};

export default connect( mapStateToProps, () => { return {} } )( ShowPreferences );
