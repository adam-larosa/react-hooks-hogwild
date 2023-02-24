import { useState } from 'react'
import Nav from "./Nav";
import PigPen from './PigPen'
import hogsData from "../porkers_data";

function App() {

	const [ grease, setGrease ] = useState( false )
	const toggleGrease = () => setGrease( g => !g )
	
	const [ sort, setSort ] = useState( '' )
	const toggleSort = someString => setSort( someString )



	// this onlyGreased function NEEDS to return true or false so .filter will 
	// know what to put in the new array.
	const onlyGreased = hogObj => hogObj.greased 

	const filteredHogs = grease ? hogsData.filter( onlyGreased ) : hogsData



	/* the callback given to .sort will be invoked with TWO arguments 
	   so it knows which hog goes first when sorting
		
	   the return value for byNameOrWeight, our callback to .sort, NEEDS TO
	   RETURN A NEGATIVE OR POSITIVE NUMBER.  That is how sort will know 
	   which one goes first.
	*/
	const byNameOrWeight = ( hogA, hogB ) => {
		switch( sort ) {
			case 'name':
				if( hogA.name < hogB.name ) {
					return -1
				} else {
					return 1
				}
			case 'weight':
				return hogA.weight - hogB.weight
			default:
				return 0
		}
	}

	const sortedHogs = [ ...filteredHogs ].sort( byNameOrWeight )

	return (
		<div className="App">
			<Nav toggleSort={ toggleSort } toggleGrease={ toggleGrease } />
			<PigPen hogs={ sortedHogs } />
		</div>
	);
}

export default App;
