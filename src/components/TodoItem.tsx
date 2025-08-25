interface TodoItemProps {
    isCompleted: boolean;
    onToggle: () => void;
}

export default function TodoItem({ isCompleted, onToggle }: TodoItemProps) {
    return (
        <div>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={onToggle}
            />
        </div>
    )
}