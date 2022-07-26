import ACTION from "./utils/action";

function TodoComponent({ todo , dispatch, update } ){
    const strike = {
        textDecoration: todo.complete ? 'line-through' : 'none'
    }

    return (
        <div class='element'>
            <input type="checkbox" onClick={() => dispatch({ type: ACTION.CHECKED_TODO, payload: { id: todo.id } })}>
                Checked
            </input>

            <span style={strike}>{todo.task}</span>


            <div class='btn-wrapper'>
                <button class='btn edit' onClick={() => { dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } }); update(todo.task) }}>
                    ✎
                </button>

                <button class='btn wrong' onClick={() => { dispatch({ type: ACTION.DELETE_TODO, payload: { id: todo.id } }) }} >
                    ✖
                </button>
            </div>
        </div>
    )
}

export default TodoComponent;