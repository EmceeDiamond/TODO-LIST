import DeleteTask from './DeleteTask';
import './Task.css'
import UpdateStatus from './UpdateStatus';
import UpdateTask from './UpdateTask';
import { useState } from 'react';

function Task({heading, description, deadline, status, id}){
    const [modalActive, setModalActive] = useState(false)
    console.log(status)
    const StatusName = (status) => {
        if (status === true){
            return "Active"
        }
        if (status === false){
            return "Completed"
        }
    }


    return(
        <div>
            <h2>{heading}</h2>
            <p>{description}</p>
            <h3>{deadline}</h3>
            <button type='button' className={status ? 'btn-status-active' : 'btn-status-completed'} onClick={() => UpdateStatus(id={id})}>{StatusName(status)}</button>
            <button type="button" className='btn-Upd' onClick={() => setModalActive(true)}>Edit</button>
            <button type="button"  className='btn_Del' onClick={() =>DeleteTask(id={id})}/>
            
            <UpdateTask active={modalActive} setActive={setModalActive} id={id} heading={heading} description={description} deadline={deadline}/>
        </div>
    )
}

export default Task;