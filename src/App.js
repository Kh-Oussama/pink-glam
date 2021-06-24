import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';





function App() {
  return (
      <React.Fragment>
        <switch>
            <Route exact path="/" component={HomePage}/>
        </switch>
      </React.Fragment>
  );
}

export default App;
