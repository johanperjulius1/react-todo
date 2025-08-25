interface TodoItemProps {
    isCompleted: boolean;
    onToggle: () => void;
    userInput: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;}

export default function TodoItem({ isCompleted, onToggle, userInput, onChange }: TodoItemProps) {
    return (
        <div>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={onToggle}
            />
            <input
                type="text"
                placeholder="Enter todo..."
                onChange={onChange}
                value={userInput}
            />
        </div>
    )
}