import React, {useState,useEffect} from 'react';

export default function Todolist(){
    const[todo, setTodo] = useState({desc: '', date: ''});
    const[todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
        /*spread notation, name linked to <input> 's name attribute */
    }
    
    const addTodo = (event) => {
        setTodos([{desc: todo.desc, date: todo.date}, ...todos]);
        /*Creates objects with the current todo values*/ 
    }

    /*Never put a function with parameters in return statement without arrow functions so the called
    function is referenced instead of immediately called each render.
    -> always use references in html, dont use function calls*/ 
    const deleteTodo = (row) => {
        setTodos(todos.filter((_, index) => row !== index));
        /* _ refers to a parameter that is not needed/read */
    }

    return(
    <div>
        <label>Date: </label>
        <input type="date" name="date" onChange={inputChanged} value={todo.date} />

        <label>Description: </label>
        <input type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        
        <button onClick={addTodo} >Add</button>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {
                todos.map((todo, index)=> 
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button onClick={() => deleteTodo(index)}>Delete</button></td>                        
                    </tr>
                )
            }
            </ tbody>
        </table>
    </div>
    );
}