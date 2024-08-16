import DeleteTask from "./DeleteTask";
import Modal from "./ModalWindow";
import { useState, useEffect } from "react";

export default function UpdateTask({active, setActive, id, heading, description, deadline}){
    const [dataTask, setDataTask] = useState({
        heading: heading,
        description: description, 
        deadline: deadline,
    })

    let Data = JSON.parse(localStorage.getItem('tasks'))

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDataTask({...dataTask, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        Data[id] = dataTask
        localStorage.setItem('tasks', JSON.stringify(Data));
        e.target.reset();
        setActive(false);
        window.location.reload();
    }

    return(
        <div>
            <Modal active={active} setActive={setActive}>
                <form onSubmit={handleSubmit}>
                    
                        <h3>Heading</h3>
                        <input className='input_AddTask' type='text' name='heading' onChange={handleInput} defaultValue={Data[id].heading} required/>
                        <h3>Description</h3>
                        <textarea className='input_AddTask' type='textarea' name='description' onChange={handleInput} defaultValue={Data[id].description}></textarea>
                        <h3>Completion date</h3>
                        <input className='input_AddTask' type='date' name='deadline' onChange={handleInput} defaultValue={Data[id].deadline} required/>
                        <button className='button-AddTask'>Save</button>
                    
                    
                </form>
            </Modal>
        </div>
    );
}