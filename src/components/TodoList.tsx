import { useState } from "react"
import TodoItem from "./TodoItem"
import type { ListOfTodo } from "../types/todo"

export default function TodoList() {
    const [todos, setTodos] = useState<ListOfTodo>([{
        text: "call mom",
        completed: false,
        isEdit: false
    }, {
        text: "call dad",
        completed: true,
        isEdit: false
    }])

    function handleCompleted(index: number) {
        setTodos(prev => prev.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    function handleUserInput(index: number, event: React.ChangeEvent<HTMLInputElement>) {
        setTodos(prev => prev.map((todo, i) =>
            i === index ? { ...todo, text: event.target.value } : todo
        ))
    }

    function handleEdit(index: number) {
        setTodos(prev => prev.map((todo, i) =>
            i === index ? { ...todo, isEdit: !todo.isEdit } : todo
        ))
    }

    function handleDelete(index: number) {
        setTodos(prev => prev.filter((_, i) => i !== index))
    }

    return (
        <section>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    onComplete={() => handleCompleted(index)}
                    onChange={(event) => handleUserInput(index, event)}
                    onEdit={() => handleEdit(index)}
                    onDelete={() => handleDelete(index)}
                />
            ))}
        </section>
    )
}
