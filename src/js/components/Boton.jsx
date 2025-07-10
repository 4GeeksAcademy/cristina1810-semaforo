import React, { useState } from "react";

const Boton =({onClick,titulo})=>{
    return(
     <button className="btn btn-primary m-3" onClick={onClick}>{titulo}</button>);
}
export default Boton;