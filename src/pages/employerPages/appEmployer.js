

import { Route,Switch } from "react-router-dom";

import Empoler1 from "./employer1";
import NavarEmployer from "../../Components/navberEmpolyer";
import Empoler2 from "./employer2";
import Empoler3 from "./employer3";
import Empoler4 from "./employer4";

function EmpolyerPages() {
    return (
     <div>
      <NavarEmployer/>
      <Switch>
      <Route path="/emploer1">
      <Empoler1/>
      </Route>
      <Route path="/emploer2">
        <Empoler2/>
      </Route>
      <Route path='/emploer3'>
        <Empoler3/>
      </Route>
      <Route path='/emploer4'>
        <Empoler4/>
      </Route>


      </Switch>
     </div>
    )}

    export default EmpolyerPages;