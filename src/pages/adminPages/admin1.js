import React from "react"
import Empoler4 from "../employerPages/employer4";


const gotoemployerpage=()=>{return <Empoler4/>}

function Admin1() {
    return (
    <div>Admin1
     <button onClick={gotoemployerpage}>
     go to employerpage
     </button>
    </div>)
}

export default Admin1;