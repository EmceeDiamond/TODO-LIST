import './App.css';
import AddTask from './components/AddTask.jsx';
import { useState } from 'react';
import TasksList from './components/TasksList.jsx';

function App() {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div>
      <main>
      <h1 className='Head'>TODO LIST</h1>
      <button className='button-add' onClick={() => setModalActive(true)}>Add a task</button>
      <TasksList />
      </main>
      <AddTask active={modalActive} setActive={setModalActive}/>
    </div>
    
  );
}

export default App;
