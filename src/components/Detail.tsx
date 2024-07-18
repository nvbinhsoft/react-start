import {useParams} from "react-router-dom";
import {TodoType} from "./DisplayTodoList.tsx";

export type RouteParams = {
    id: string,
}
export const Detail = () => {
    const {id} = useParams<RouteParams>()
    const todos: TodoType[] = JSON.parse(localStorage.getItem("todos") || "[]")
    const todo = todos.find(todo => todo.id === id)

    if(!todo) {
        return <div>Todo not found</div>
    }

    return (
        <div>
            {todo.name}
        </div>
    )
}