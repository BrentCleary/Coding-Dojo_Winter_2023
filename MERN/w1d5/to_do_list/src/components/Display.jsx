import React from 'react'


const Display = ({task, index, deleteItem}) => {
    
    const { listItem, dueDate } = task; 

    const deleteOneItem = () => {
        deleteItem(task, index);
    }

    // Get Check-Box Value
    function strikeText()
    {
        var checkbox = document.querySelector("#check-box");
        console.log(checkbox.checked)

    }


    return(
        

        <div className='mt-4'>
            
            {/* <div>
                <h3 id="task"> {listItem} </h3> <input className='strikethrough' id='check-box' type='checkbox' value='0'/>
            </div> */}

            <div class="form-group text-aligh-center marLeft">
                <label for="inputName" class="col-md-1 control-label"></label>
                <div class="col-md-5">
                    <div class="checkbox">
                        <input type="checkbox" name="packersOff" id="packers" value="1"/>
                        <label class="strikethrough">{listItem}</label>
                    </div>
                </div>
            </div>


            

            <h4> Due: {dueDate} </h4>
            <button className='btn btn-danger' onClick={deleteOneItem}>Delete</button>

        </div>

    )

}

export default Display;