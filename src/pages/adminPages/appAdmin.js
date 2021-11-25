
import { Route,Switch } from "react-router-dom";

import NavarAdmi from '../../Components/navberAdmin';
import Admin1 from './admin1';
import Admin2 from './admin2';
import Admin3 from './admin3';

function AdminPages() {
    return (
     <div>
      <NavarAdmi/>
      <Switch>
      <Route path="/admin1">
      <Admin1/>
     </Route>
     <Route path="/admin2">
      <Admin2/>
     </Route>
     <Route path='/admin3'>
      <Admin3/>
     </Route>
   


      </Switch>
     </div>
    )}

    export default AdminPages;


