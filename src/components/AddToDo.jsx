import { useState } from "react"

export default  function AddToDo({onAdd}) {

    const [text, setText] = useState("");
    const [error, setError] = useState("")

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if(!text.trim()) {
                return setError("Please enter some text!")
            }
            onAdd(text)
            setText("")
        }}>
            <input type="text" placeholder="Add a new todo"  value={text} onChange={(e) => {
                setText(e.target.value)
            }} />
            <button>Add</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}