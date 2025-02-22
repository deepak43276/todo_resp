import React, { useEffect, useState } from 'react';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';  // Corrected import
import axios from 'axios';
import Create from './Create';
import './home.css'

const Home = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err));
    }, []);

    const handleEdit=(id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => {
           
            setTodos(todos.map(todo => 
                todo._id === id ? { ...todo, done: !todo.done } : todo
            ));
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <Create />
            {
                todos.length === 0 ? (
                    <h1>No Items Available</h1>
                ) : (
                    todos.map((todo, index) => (
                        <div key={index}>
                            <div className="checkbox" onClick={()=> handleEdit(todo._id)}>
                            {todo.done ? <BsFillCheckCircleFill></BsFillCheckCircleFill> : <BsCircleFill className="icon" />}

                            
                            <p className={todo.done? "line-through": null}>{todo.task}</p>
                            </div>
                            <span><BsFillTrashFill className="icon" /></span>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default Home;
