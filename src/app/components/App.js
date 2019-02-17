import React from 'react';
import AdjustPreferences from './AdjustPreferences';
import ShowPreferences from './ShowPreferences';

export const App = ( props ) => {
    return(
        <div>
          <AdjustPreferences/>
          <hr/>
          <ShowPreferences/>
        </div>
    );
};
