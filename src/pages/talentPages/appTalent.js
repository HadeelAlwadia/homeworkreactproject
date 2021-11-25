
import { Route,Switch } from "react-router-dom";
import NavarTalent from "../../Components/NavbarTalent";

import Talent1 from "./talent1";
import Talent2 from "./talent2";
import Talent3 from "./talent3";

function TalentPages() {
    return (
     <div>
      <NavarTalent/>
      <Switch>
      <Route path="/talent1">
      <Talent1/>
    </Route>
    <Route path="/talent2">
      <Talent2/>
    </Route>
    <Route path='/talent3'>
      <Talent3/>
    </Route>
   


      </Switch>
     </div>
    )}

    export default TalentPages;


