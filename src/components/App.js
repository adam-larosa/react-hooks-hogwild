import { useState } from 'react'
import Nav from "./Nav";
import PigPen from './PigPen'

import hogsData from "../porkers_data";

function App() {
	const [ greased, setGreased ] = useState( false )
	const toggleFilter = () => setGreased( !greased )

	const [ sort, setSort ] = useState( '' )
	const toggleSort = e => setSort( e.target.value ) 

	console.log( sort )


		/* if this callback function we're giving to filter returns true, the
		   the hog object goes into the new filtered array.  If false, it 
		   does not */
	const byGrease = hogObj => {
		if( hogObj.greased === true ) {
			return true
		} else {
			return false
		}
	}
	const filteredHogs = greased ? hogsData.filter( byGrease ) : hogsData


	const byNameOrWeight = ( hogObjA, hogObjB ) => {
		switch( sort ) {
			case 'name':
				if( hogObjA.name < hogObjB.name ) {
					return -1
				} else {
					return 1
				}
			case 'weight':
				return hogObjA.weight - hogObjB.weight
			default:
				return 0
		}
	}
	
	/* the callback we're giving to sort NEEDS to return a positive or 
	   negative number so sort will know which one goes first */
	const sortedHogs = [ ...filteredHogs ].sort( byNameOrWeight )


	return (
		<div className="App">
			<Nav toggleSort={ toggleSort } toggleFilter={ toggleFilter } />
			<PigPen hogsArray={ sortedHogs } />
		</div>
	);
}

export default App;
