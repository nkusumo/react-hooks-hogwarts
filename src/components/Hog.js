import { useState } from "react";

function Hog({name, specialty, greased, weight, image, medals}) {
    const [hogDisplay, setHogDisplay] = useState(false);

    const handleInfo = () => {
        setHogDisplay(!hogDisplay);
    }

    return(
        <div onClick={handleInfo} className="ui four wide column">
            <div className="ui card">
                <h3>{name}</h3>
                <div className="image">
                    <img src={image} />
                </div>
                {hogDisplay ?
                    <div>
                        <h4>Specialty: {specialty}</h4>
                        <p>Weight: {weight}</p>
                        <p>{greased ? "Greased" : "Not greased"}</p>
                        <p>Highest Medal Achieved: {medals}</p>
                    </div>
                :
                    null    
                }
            </div>
        </div>
    )
}

export default Hog;