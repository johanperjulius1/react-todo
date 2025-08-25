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


    return (
        <section>
            <TodoItem
                onToggle={handleCompleted}
                isCompleted={isCompleted}
                userInput={userInput}
                onChange={handleUserInput}
            />
            <p>first item</p>
            <p>second item</p>
        </section>
    )
}
