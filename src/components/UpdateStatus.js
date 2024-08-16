

export default function UpdateStatus({id}){
    let Data = JSON.parse(localStorage.getItem('tasks'));
    Data[id].status = !Data[id].status;
    localStorage.setItem('tasks', JSON.stringify(Data));
    window.location.reload();
}