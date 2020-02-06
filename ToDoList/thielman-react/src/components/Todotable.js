import React from 'react';

export default function Todotable(props) {
    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
            {
                props.todos.map((todo, index)=> 
                    <tr key={index}>
                        <td>{todo.date}</td>
                        <td>{todo.desc}</td>
                        <td><button onClick={() => props.delete(index)}>Delete</button></td>                                                
                    </tr>
                )
            }
            </ tbody>
        </table>
        </div>
    );
}