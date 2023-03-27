import React, { useState} from "react";

const Display = ({band}) => {
    const { bandName, genre, memberCount, homeCity } = band;

    const deleteBand = () => {
        deleteBand(band, index);
    }

    return (
        <div class='d-flex justify-content-between align-center p-2 m-2 border border-gray'>
            <h2>{bandName}</h2>
            <div>
                <p>Genre: {genre}</p>
                <p>Genre: {memberCount}</p>
                <p>Genre: {homeCity}</p>
            </div>
            <div>
                <button>Update</button>
                <button onClick={deleteBand}>Delete</button>
            </div>

        </div>
    )

}

export default Display