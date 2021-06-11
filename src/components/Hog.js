function Hog({name, specialty, greased, weight, image, medals}) {
    return(
        <div className="ui four wide column">
            <div className="ui card">
                <h3>{name}</h3>
                <div className="image">
                    <img src={image} />
                </div>
                <h4>Specialty: {specialty}</h4>
                <p>Weight: {weight}</p>
                <p>Greased: {greased}</p>
                <p>Highest Medal Achieved: {medals}</p>
            </div>
        </div>
    )
}

export default Hog;