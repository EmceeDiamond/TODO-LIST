import { useState, useEffect } from "react";

export default function DeleteTask({id}){
    let Data = JSON.parse(localStorage.getItem('tasks'))
    localStorage.setItem('tasks', JSON.stringify([...Data.filter((_,index) => index !== id)]));    
    window.location.reload();
    console.log("Dek")
}