import React from 'react'


const Display = (props) => {
    
    console.log(props);

    return(
        
        <div>
            {props.boxColor.map( (item, index) => {
                return(
                <div style={
                    {backgroundColor: item,
                    display: 'inline-block',
                    margin: "10px",
                    height: "200px",
                    width: "200px" }} key={index}></div>)
            })}
            
        </div>
    )
}

export default Display