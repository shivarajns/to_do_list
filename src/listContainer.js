import React, {useState} from 'react'

function List() {

    const[works, setWorks] = useState(["Work-1", "Work-2"])

    return(
        <div className='lis-main-cont'>
            <div className='Input'>
                <input type='text' placeholder='Add Works......' id="textInput"></input>
                <button id="add-btn"> Add </button>
            </div>

            <div className='list-cnt'>
                <ol>
                    {works.map( (work, index)=>
                    <li id="lists" key={index}>{work}</li> )}
                </ol>
            </div>
        </div>
    )
}

export default List