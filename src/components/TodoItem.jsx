export default function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label style={{textDecoration: todo.isCompleted ? 'line-through' : 'none' }}> 
                <input type="checkbox"  
                checked={todo.isCompleted} 
                onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }} />
                {todo.text}
                <button onClick={() => {onDelete(todo)}}>x</button>
            </label>
        </div>
    )
}