let nextID = 4;

export default function todoReducer(todos, action) {
    switch (action.type) {
        case 'change':
            return todos.map(t => {
                if (t.id === action.todo.id) {
                    return action.todo;
                }
                else
                    return t;
            });
            break;
        case 'add':
            return [...todos, {
                id: nextID++,
                todoText: action.text,
                done: false
            }];
            break;
        case 'delete':
            return todos.filter((t) => t.id !== action.todo.id);
            break;
        default:
            return todos;
            break;
    }
}
