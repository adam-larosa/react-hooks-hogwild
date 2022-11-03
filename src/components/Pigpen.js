
import Hog from './Hog'

const Pigpen = ({ hogs }) => {

    const hogComponents = hogs.map( hogObj => { 
        return <Hog key={ hogObj.name } hog={ hogObj } /> 
    } )

    return (
        <div className="ui grid container">
            
            { hogComponents }
           
        </div>
    )
}

export default Pigpen