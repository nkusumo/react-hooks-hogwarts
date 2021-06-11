import Hog from "./Hog"

function HogsList({hogs}) {
    
    const hogsArray = hogs.map(hog => <Hog name={hog.name} image={hog.image} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medals={hog["highest medal achieved"]} />)

    return (
        <div className="ui grid container">
            {hogsArray}
        </div>
    )
}

export default HogsList;