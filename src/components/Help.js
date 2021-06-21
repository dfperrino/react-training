import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import HelpDetail from './HelpDetail';

const Help = (props) => {
  return (
    <div>
     <h1>Help</h1>
     <Link to='/help/react'>React Help</Link>
     <Link to='/help/allergen'>Allergen Help</Link>
     <Switch>
       <Route path='/help/:name'>
        <HelpDetail />
       </Route>
     </Switch>
    </div>
  );
};

export default Help;
