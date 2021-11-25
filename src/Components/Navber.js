import {link} from 'react-router-dom';
import { React } from "react";

function Navar() {
  return(
    <ul>
    <li><link to='/' exact>home</link></li>
    <li><link to='/talent'>talent</link></li>
    <li><link to='/admin' >admin</link></li>
    <li><link to='/employer'>employer</link></li>
</ul>

  )

}

