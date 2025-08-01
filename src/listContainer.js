import React, {useState} from 'react'

function List() {

    const[works, setWorks] = useState(["Work-1", "Work-2"])

    const AddWork = ()=>{
        let addWork = document.getElementById("textInput").value;
        if(addWork.trim() !== ""){
            setWorks(w => [...w, addWork])
            document.getElementById("textInput").value =""
        }
        
    }

    const RemoveWork = (i)=> {
        setWorks(works.filter( (_,index)=> i !== index ));
    }

    return(
        <div className='lis-main-cont'>
            <div className='Input'>
                <input type='text' placeholder='Add Works......' id="textInput"></input>
                <button id="add-btn" onClick={AddWork}> Add </button>
            </div>

            <div className='list-cnt'>
                <ol>
                    {works.map( (work, index)=>
                    <div className='list-cnt-cross-btn'>
                    <li id="lists" key={index}>{work} 
                     </li><button onClick={()=>RemoveWork(index)} >x</button> </div>)}
                </ol>
            </div>
        </div>
    )
}

export default List