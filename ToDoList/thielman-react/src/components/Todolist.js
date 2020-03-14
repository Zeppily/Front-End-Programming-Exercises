import React, {useState} from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

export default function Todolist(){
    const[todo, setTodo] = useState({desc: '', date: new Date()});
    const[todos, setTodos] = useState([]);



    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
        /*spread notation, name linked to <input> 's name attribute */
    }
    
    const addTodo = (event) => {
        setTodos([{desc: todo.desc, date: todo.date.toLocaleDateString("FI")}, ...todos]);
        /*Creates objects with the current todo values*/ 
    }
    const changeDate = (date) => {
        setTodo({
            ...todo, date: date
        });
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((_, index) => row !== index));
        /* _ refers to a parameter that is not needed/read */
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Description',
            accessor: 'desc'
        },
        {
            Header: 'Remove?',
            Cell: row => (
                <Button variant="contained" color="secondary" onClick={() => deleteTodo(row.index)}>Delete</Button>
            )
        }
        
    ]  

    return(
    <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker onChange={(date) => changeDate(date)} value={todo.date}  format="dd.MM.yyyy" 
        label="date"/>
        </MuiPickersUtilsProvider>

        <TextField required id="filled-basic" label="description" variant="filled" type="text" name="desc" onChange={inputChanged} value={todo.desc}/>
        
        <Button variant='contained' color='primary' onClick={addTodo} >Add</Button>

        <ReactTable data={todos} columns={columns} sortable={true} defaultPageSize={10} />
       
    </div>
    );
}