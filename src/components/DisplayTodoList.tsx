import {CreateTodo} from "./CreateTodo.tsx";
import {Todo} from "./Todo.tsx";
import {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";

export type TodoType = {
    id: string,
    name: string,
    isCompleted: boolean,
}
export const DisplayTodoList = () => {
    const [todos, setTodos] = useState<TodoType[]>(JSON.parse(localStorage.getItem("todos") || "[]"))
    const [newThing, setNewThing] = useState<string>("")

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    const oneNewThingChange = (e) => {
        setNewThing(e.target.value)
    }
    const onAddingButtonClick = () => {
        if (newThing === "") {
            return
        }
        const newItem: TodoType = {
            id: uuidv4(),
            name: newThing,
            isCompleted: false,
        }
        setTodos([newItem, ...todos])
        setNewThing("")
    }
    const updateIsCompleted = (todoId: string) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    const deleteTodo = (todoId: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(updatedTodos)
    }

    return (
        <div>
            <p> This is Todo app</p>
            <br/>
            <CreateTodo newThing={newThing} oneNewThingChange={oneNewThingChange}
                        onAddingButtonClick={onAddingButtonClick}/>
            <div>
                {
                    todos.map(todo => {
                        return <Todo key={todo.id} name={todo.name} isCompleted={todo.isCompleted}
                                     updateIsCompleted={updateIsCompleted} id={todo.id} deleteTodo={deleteTodo}/>
                    })
                }
            </div>
        </div>
    )
}