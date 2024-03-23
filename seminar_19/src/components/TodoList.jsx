/*

HW - 5

Создайте компонент TodoList для управления списком дел, применяя хук useReducer для обработки добавления новых задач, переключения статуса выполнения и очистки выполненных задач.

Основные шаги:

1) Инициализируйте начальное состояние `initialState` со списком задач `todos`.
2) Реализуйте функцию `reducer` для обработки действий 'add_todo', 'toggle_todo' и 'clear_completed' с соответствующими изменениями состояния.
3) Используйте `useReducer` для управления состоянием списка задач в компоненте TodoList.
4) Разработайте логику для добавления новой задачи в список. При добавлении задачи обнуляйте поле ввода.
5) Отобразите список задач, где каждая задача может быть отмечена как выполненная по клику на неё, что должно переключать её статус 'completed'.
6) Реализуйте кнопку 'Clear Completed', которая удаляет все выполненные задачи из списка.

Цель задания: Научиться использовать хук useReducer для управления сложными состояниями в React-приложениях, а также практиковать обработку пользовательских взаимодействий и динамическое изменение списка данных.

*/
import React, { useReducer, useState } from 'react';

const initialState = {
    todos: []
};

function reducer(state, action) {
    switch (action.type) {
        case 'add_todo':
            return {
                ...state,
                todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
            };
        case 'toggle_todo':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case 'clear_completed':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            };
        default:
            throw new Error();
    }
}

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (!text.trim()) return;
        dispatch({ type: 'add_todo', payload: text });
        setText(''); 
    };

    const toggleTodo = (id) => {
        dispatch({ type: 'toggle_todo', payload: id });
    };

    const clearCompleted = () => {
        dispatch({ type: 'clear_completed' });
    };

    return (
        <div>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {state.todos.map(todo => (
                    <li 
                        key={todo.id} 
                        onClick={() => toggleTodo(todo.id)} 
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <button onClick={clearCompleted}>Clear Completed Tasks</button>
        </div>
    );
}

export default TodoList;
