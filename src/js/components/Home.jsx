import React from "react";
import Semaforo from "./Semaforo"
import "../../styles/index.css"

//create your first component
const Home = () => {
	return (
		<div className="text-center m-5">
            <Semaforo/>
		</div>
	);
};

export default Home;