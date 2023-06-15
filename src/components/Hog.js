import { useState } from 'react'

const JustThePic = ({ image }) => <img src={ image } alt="hogpic" />

const AllDetails = ({ hog }) => {
    return (
        <div>
            <h1>{ hog.name }</h1>
            <h3>{ hog.specialty }</h3>
            <h2>{ hog.weight} kilos</h2>
            <h4>{ hog['highest medal achieved'] } medal achieved</h4>
            { hog.greased ? <h1>ready for fun</h1> : <div>no grease</div> }
        </div>
    )
}


const Hog = ({ hog }) => {

    const [ showFront, setShowFront ] = useState( false )
    const toggleFront = () => setShowFront( !showFront )

    return (
        <div onClick={ toggleFront } 
            className="ui three wide column image pigTile"
        >
            { showFront ? 
                <JustThePic image={ hog.image } /> 
            : 
                <AllDetails hog={ hog } /> 
            }
        </div>
    )
}





export default Hog