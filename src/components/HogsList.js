import Hog from "./Hog"

function HogsList({hogs, greased, sortBy}) {

    const filteredHogs = hogs.filter(hog => {
        if (greased !== "all") {
            return hog.greased.toString() === greased;
        } else  {
            return true;
        }
    })

    const sortedHogs = filteredHogs.sort(
        function (a, b) {
            if (sortBy === "weight") {
                return b.weight - a.weight
            } else {
                var nameA = a.name.toLowerCase(); // ignore upper and lowercase
                var nameB = b.name.toLowerCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }
        }
    )

    const hogsArray = sortedHogs.map(hog => <Hog key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medals={hog["highest medal achieved"]} />)

    return (
        <div className="ui grid container">
            {hogsArray}
        </div>
    )
}

export default HogsList;