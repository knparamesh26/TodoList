import { h } from "preact";
import { useReducer, useState, useEffect } from "preact/hooks";
import TodoComponent from "./todoComponent";
import ACTION from "./utils/action";


const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, { id: Date.now(), task: action.payload.task, complete: false }];

    case ACTION.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    case ACTION.CHECKED_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

    default:
      console.log("Wrong action!");
  }
};

export default function App() {
  const [list, dispatch] = useReducer(reducer, []);
  const [task, setTask] = useState("");

  function addTask(e) {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { task: task } });
    setTask("");
  }

  return (
    <>
        <div class='container'>
            <h1>Todo List</h1>
            <form onSubmit={addTask}>
                <input class='rect-box' type="text" value={task} 
                    onInput={
                        (e) => setTask(e.target.value)
                    }
                />
            </form>
        </div>

        <ul>
            {list && list.map((todo, index) => (
              <TodoComponent todo={todo} dispatch={dispatch} update={setTask} key={index} />
            ))}
        </ul>                                                                         
    </>
  );
}
