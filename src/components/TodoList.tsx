import { useState } from "react"
import TodoItem from "./TodoItem"
import type { ListOfTodo } from "../types/todo"
import styles from "./TodoItem.module.css"

export default function TodoList() {
    const [todos, setTodos] = useState<ListOfTodo>([{
        id: "1",
        text: "call mom",
        completed: false,
        isEdit: false
    }, {
        id: "2",
        text: "call dad",
        completed: true,
        isEdit: false
    }])
    const [newTodoText, setNewTodoText] = useState("")

    function handleAddTodo() {
        if (newTodoText.trim() === "") return

        const newTodo = {
            id: Date.now().toString(),
            text: newTodoText.trim(),
            completed: false,
            isEdit: false
        }

        setTodos(prev => [...prev, newTodo])
        setNewTodoText("")
    }

    function handleNewTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTodoText(event.target.value)
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            handleAddTodo()
        }
    }

    function handleCompleted(id: string) {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    function handleUserInput(id: string, event: React.ChangeEvent<HTMLInputElement>) {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, text: event.target.value } : todo
        ))
    }

    function handleEdit(id: string) {
        setTodos(prev => prev.map(todo =>
            todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
        ))
    }

    function handleDelete(id: string) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <section>
            <label htmlFor="new-todo-input" className={styles.srOnly}>
                Add new todo
            </label>
            <input
                id="new-todo-input"
                name="new-todo"
                type="text"
                placeholder="Enter todo..."
                onChange={handleNewTodoChange}
                onKeyDown={handleKeyDown}
                value={newTodoText}
                className={styles.todoInput}
            />
            <button
                type="button"
                onClick={handleAddTodo}
                className={styles.button}
                aria-label="Add new todo"
            >
                Add
            </button>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onComplete={() => handleCompleted(todo.id)}
                    onChange={(event) => handleUserInput(todo.id, event)}
                    onEdit={() => handleEdit(todo.id)}
                    onDelete={() => handleDelete(todo.id)}
                />
            ))}
        </section>
    )
}
