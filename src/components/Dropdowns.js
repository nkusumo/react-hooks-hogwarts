function Dropdowns({ setGreased}) {
    function handleStatus(e) {
        setGreased(e.target.value)
    }

    return(
        <form>
            <select onChange={handleStatus} name="greaseFilter">
                <option value="all">All</option>
                <option value="true">Greased</option>
                <option value="false">Not greased</option>
            </select>

        </form>
    )
}

export default Dropdowns;