import "./task.css";

export function TaskCard({ready}) {

    return <div className="tasksDiv">
        <h1>Mi primer tarea</h1>
        <p className={ready ? "card" : "card2"}>Tarea realizada</p>
    </div>
}