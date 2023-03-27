import React from "react";

const FunctionalDisplay = (props) => {
    const {source, width, height} = props;

    return(
        <div>
            <h2>My Favorite Dog</h2>
            <img src={"${source}/${width}/${height}"} alt="goodest boi"></img>
        </div>
    )
}

export default FunctionalDisplay;