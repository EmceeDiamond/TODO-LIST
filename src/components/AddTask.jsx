import { useState } from 'react';
import './AddTask.css'
import Modal from './ModalWindow';

export default function AddTask({active, setActive}){
    const [dataTask, setDataTask] = useState({
        heading: "",
        description: "", 
        deadline: "",
        status: true,
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDataTask({...dataTask, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let oldData = JSON.parse(localStorage.getItem('tasks'))
        if (oldData != null){
            localStorage.setItem('tasks', JSON.stringify([ ...oldData, dataTask ]));
        }
        else{
            localStorage.setItem('tasks', JSON.stringify([dataTask ]));
        }
        e.target.reset();
        setActive(false);
        window.location.reload();
    }

    return(
        <div>
            <Modal active={active} setActive={setActive}>
                <form onSubmit={handleSubmit}>
                    <h3>Heading</h3>
                    <input className='input_AddTask' type='text' name='heading' onChange={handleInput} required/>
                    <h3>Description</h3>
                    <textarea className='input_AddTask' type='textarea' name='description' onChange={handleInput}></textarea>
                    <h3>Completion date</h3>
                    <input className='input_AddTask' type='date' name='deadline' onChange={handleInput} required/>
                    <button className='button-AddTask'>Save</button>
                </form>
            </Modal>
        </div>
    );
};