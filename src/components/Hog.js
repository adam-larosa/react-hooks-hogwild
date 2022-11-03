
import { useState } from 'react'

const Image = ({ image }) => <img src={ image } alt="hog pic"/>

const Details = ({ hog }) => {
    return (
        <div>
            <h1>{ hog.name }</h1>
            <h3>{ hog.specialty }</h3>
            <div>Weight: { hog.weight } kilos</div>
            <h4>{ hog["highest medal achieved"] } medal achieved</h4>
            { hog.greased ? <h1>READY FOR FUN</h1> : <h2>no grease</h2>}
        </div>
    )
} 


const Hog = ({ hog }) => {

    const [ showDetails, setShowDetails ] = useState( true )

    const toggleDetails = () => {
        setShowDetails( !showDetails )
    }

    return (
        <div onClick={ toggleDetails } 
            className="image pigTile ui three wide column">
            
            { showDetails ? 
                <Details hog={ hog } /> : 
                <Image image={ hog.image } /> }

        </div>
    )
}

export default Hog