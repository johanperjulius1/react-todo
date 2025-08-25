import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList() {
    const [isCompleted, setIsCompleted] = useState(false)
    const [userInput, setUserInput] = useState("")

    function handleCompleted() {
        setIsCompleted(isCompleted => !isCompleted)
    }

    function handleUserInput(event: React.ChangeEvent<HTMLInputElement>) {
        setUserInput(event.target.value)
    }

    function handleEdit() {
        console.log("edit")
    }

    function handleDelete() {
        console.log("delete")
    }

    return (
        <section>
            <TodoItem
                onToggle={handleCompleted}
                isCompleted={isCompleted}
                userInput={userInput}
                onChange={handleUserInput}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <p>first item</p>
            <p>second item</p>
        </section>
    )
}
