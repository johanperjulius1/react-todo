import { useState } from "react"
import TodoItem from "./TodoItem"

export default function TodoList() {
    const [isCompleted, setIsCompleted] = useState(false)

    function handleCompleted() {
        setIsCompleted(isCompleted => !isCompleted)
    }

    return (
        <section>
            <TodoItem onToggle={handleCompleted} isCompleted={isCompleted} />
            <p>first item</p>
            <p>second item</p>
        </section>
    )
}
