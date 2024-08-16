import { useEffect, useState } from "react"
import Task from "./Task";
import './Task.css'

export default function TasksList(){
    const [dataList, setDataList] = useState(null);
    const [dataStatus, setDataStatus] = useState("All");
    const loadTask = () => {
            let Data = JSON.parse(localStorage.getItem('tasks'))
            setDataList(Data)

    }

    useEffect(() =>{
        loadTask();
    }, [])

    const [sortedField, setSortedField] = useState(null);
    const [sort, setSort] = useState(0)
    if (sortedField !== null) {
        if (sort === 1)
            dataList.sort((a, b) => {
            if ((a[sortedField]) < (b[sortedField])) {
                return -1;
            }
            if ((a[sortedField]) > (b[sortedField])) {
                return 1;
            }
            return 0;
            });
        else if (sort === 2){
            dataList.sort((a, b) => {
                if ((a[sortedField]) > (b[sortedField])) {
                    return -1;
                }
                if ((a[sortedField]) < (b[sortedField])) {
                    return 1;
                }
                return 0;
                });
        }
        else if (sort === 3){
            setSort(0);
            loadTask();
        }
    }

    const Status = (status) =>{
        setDataStatus(status)
    }
    
    
    return(
        <div>
        <button type="button" className="btn-sort" onClick={() => {setSortedField('deadline'); setSort(sort+1)}}>Sort by deadline</button>
        <button type="button" className="btn-sort-by-status" onClick={() => Status("All")}>All</button>
        <button type="button" className="btn-sort-by-status" onClick={() => Status(true)}>Active</button>
        <button type="button" className="btn-sort-by-status" onClick={() => Status(false)}>Completed</button>
        <div className="grid">
            {dataList !== null && dataList.map((item, index) => {
                if (dataStatus === item.status)
                    return <Task  heading={item.heading} description={item.description} deadline={item.deadline} status={item.status} id={index}/>
                if (dataStatus === "All")
                    return <Task  heading={item.heading} description={item.description} deadline={item.deadline} status={item.status} id={index}/>
            })}
            
        </div>
        </div>
    )


}