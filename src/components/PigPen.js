import HogCard from './HogCard'

function PigPen({ hogs }) {

    const hogComponents = hogs.map( hogObj => {
        return <HogCard key={ hogObj.name } hog={ hogObj } />
    } )
    
    return (
        <div className="ui grid container">
            { hogComponents }
        </div>
    )
}

export default PigPen