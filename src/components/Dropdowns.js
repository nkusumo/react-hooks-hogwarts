function Dropdowns({ setGreased, setSortBy }) {

    function handleSortName() {
        setSortBy("name")
    }

    function handleSortWeight() {
        setSortBy("weight")
    }

    function handleStatus(e) {
        setGreased(e.target.value)
    }

    return(
        <div>
            <select onChange={handleStatus} name="greaseFilter">
                <option value="all">All</option>
                <option value="true">Greased</option>
                <option value="false">Not greased</option>
            </select>
            <button onClick={handleSortName}>Sort by Name</button>
            <button onClick={handleSortWeight}>Sort by Weight</button>
        </div>
    )
}

export default Dropdowns;