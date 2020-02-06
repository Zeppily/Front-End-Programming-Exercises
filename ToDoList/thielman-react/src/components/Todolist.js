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
                todos.map(   todo=> 
                    <tr>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                    </tr>
                )
            }
            </ tbody>
        </table>
    </div>
    );
}