import './App.css';
import {useState} from "react";
import {useInput} from "./hooks/useInput";
import Hover from "./components/Hover";
import List from "./components/List";
import {useDebounce} from "./hooks/useDebounce";
import React from "react";
import {useRequest} from "./hooks/useRequest";
import axios from "axios";


function App() {


    const newInput = useInput('')


    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                }
            )
    }


    /*const [value, setValue] = useState('');
    const debouncedCallback = useDebounce(search, 1000)

    const onChange = (e) => {
        setValue(e.target.value)
        debouncedCallback(e.target.value)
    }*/



       // const [todos, error, loading] = useRequest(fetchTodos)


   // function fetchTodos() {
  //      return  axios.get(`https://jsonplaceholder.typicode.com/todos`)

  //  }

    const myInput = useInput('');

    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
        debouncedCallback(e.target.value)
    }

    const debouncedCallback = useDebounce(search, 1000);

    /*const [todos, error, loading] = useRequest(fetchPosts)

    function fetchPosts() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    }


    if (loading) {
        return <h1>Загрузка....................</h1>
    }

    if (error) {
        return <h1>Ошибка</h1>
    }
    */



    return (
        <div>
            {/*<input value={newInput.value} onChange={newInput.onChange} />
            <button onClick={() => console.log(newInput.value)}>Click</button>*/}
            {/*<input value={value} onChange={onChange} />
            <Hover/>
            <List/>*/}

            <input value={value} onChange={onChange} />

            <Hover />
            <input value={myInput.value} onChange={myInput.onChange} />
            <button onClick={() => console.log(myInput.value)}>click</button>
            {/*{todos && todos.map(todo =>
                <div key={todo.id} style={{padding: 30, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            )}*/}
            {/*{todos.map(todo => (
                <div key={todo.id} style={{padding: 20, border: '2px solid black'}}>
                    {todo.id}. {todo.title}
                </div>
            ))}*/}
            <List />

        </div>
    )
}

export default App;
