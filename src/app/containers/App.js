import React from 'react';
import { AdjustPreferences } from '../components/AdjustPreferences';
import { ShowPreferences } from '../components/ShowPreferences';
import { connect } from 'react-redux';

class App extends React.Component {
    render() {
        return(
            <div>
              <AdjustPreferences
              notifications = { this.props.notifications }
              DISABLE_NOTIFICATIONS = { this.props.DISABLE_NOTIFICATIONS }
              ENABLE_NOTIFICATIONS = { this.props.ENABLE_NOTIFICATIONS }
              />
              <hr/>
              <ShowPreferences notifications = { this.props.notifications }/>
            </div>
        );
    }
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

export default connect( mapStateToProps, mapDispatchToProps )( App );
