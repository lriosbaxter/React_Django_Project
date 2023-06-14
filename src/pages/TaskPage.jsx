import { useEffect } from "react"
import { getAllTasks } from "../api/task.api";

export function TasksPage(){
    useEffect(() =>{
        async function loadTasks(){
            const response = await getAllTasks();
            console.log(response);
        }
        loadTasks()
    }, []);
    return <div>TasksLists</div>
}