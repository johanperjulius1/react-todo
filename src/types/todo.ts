export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    isEdit?: boolean;
}

export type ListOfTodo = Todo[];

