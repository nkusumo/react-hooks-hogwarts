import Hog from "./Hog"

function HogsList({hogs, greased}) {

    const filteredHogs = hogs.filter(hog => {
        if (greased !== "all") {
            return hog.greased.toString() === greased;
        } else  {
            return true;
        }
    })

    const hogsArray = filteredHogs.map(hog => <Hog key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medals={hog["highest medal achieved"]} />)

    return (
        <div className="ui grid container">
            {hogsArray}
        </div>
    )
}

export default HogsList;