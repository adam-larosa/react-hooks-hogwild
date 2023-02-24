import { useState } from 'react'

const Front = ({ name, image }) => {
    return (
        <div>
            <h1>{ name }</h1>
            <img src={ image } alt='piggy'/>
        </div>
    )
}

const Back = ({ hog }) => {
    
    return (
        <div>
            <h1>{ hog.name }</h1>
            <h3>{ hog.specialty }</h3>
            <h2>{ hog.weight } kilos</h2>
            <h4 className="achievementText">
                { hog["highest medal achieved"] } medal achieved
            </h4>
            { hog.greased ? <h1>READY FOR FUN</h1> : <div>no grease</div> }
        </div>
    )
}


const HogCard = ({ hog }) => {

    const [ showFront, setShowFront ] = useState( false )
    const toggleFront = () => setShowFront( showFront => !showFront )

    return (
        <div onClick={ toggleFront } 
            className="ui three wide column image pigTile">
            { showFront ? 
                <Front name={ hog.name } image={ hog.image } /> : 
                <Back hog={ hog } /> 
            }
        </div>
    )
}

export default HogCard