import React, { useState } from "react";
import Nav from "./Nav";
import Pigpen from './Pigpen'
import hogsData from "../porkers_data";


 
function App() {

	const [ grease, setGrease ] = useState( false )
	const toggleFilter = () => {
		setGrease( !grease )
	}

	const [ sort, setSort ] = useState( '' )
	const toggleSort = sortValue => {
		setSort( sortValue )
	}

	// the callback to filter needs to return true or false so filter knows
	// what to put in the new array
	const filteredHogs = grease ? 
		hogsData.filter( hogObj => hogObj.greased ) : hogsData
	

	const sortedHogs = [ ...filteredHogs ].sort( (hogObjA, hogObjB) => {
		// this callback to sort, needs to return a negative or positive number
		// so it knows which hogObj goes first
		switch( sort ) {
			case 'name' :
				if( hogObjA.name < hogObjB.name) {
					return -1
				} else {
					return 1
				}
			case 'weight':
				return hogObjA.weight - hogObjB.weight
			default:
				return 0
		}
	} )


	return (
		<div className="App">
			<Nav toggleSort={ toggleSort } toggleFilter={ toggleFilter }/>
			<Pigpen hogs={ sortedHogs } />
			
		</div>
	);
}

export default App;
