
import React,{useState} from 'react'
import Todoform from '../Todoform/Todoform'
import {v4 as uuidv4} from 'uuid'
import Todo from '../Todo/Todo';
import Editform from '../Edittodoform/Editform';

uuidv4();

const Todowrapper = () => {
    const [todos,setTodos]=useState([])
    const addtodo = todo =>{
        setTodos([...todos,{id:uuidv4(), task:todo , deleted:false , isEditing:false}])
        console.log(todos)
    }
    
    const testCompleted =id =>{
      setTodos(todos.map(todo => todo.id===id ?{...todo ,deleted:!todo.deleted}:todo))
    }

    const deleteTodo =id=>{
      setTodos(todos.filter(todo=>id!==todo.id))
    }
    const editTodo=id=>{
      setTodos(todos.map(todo=>id===todo.id ?{...todo,isEditing:!todo.isEditing}:todo))
      
    }
    const editTask=(task,id)=>{
      setTodos(todos.map(todo=>id===todo.id ?{...todo, task , isEditing:!todo.isEditing}:todo))
      
    }

   


  return (
    <div className='TodoWrapper'>
        <Todoform addtodo={addtodo}/>
        {todos.map((todo) =>
          todo.isEditing?
          (
          <Editform task={todo} editTodo={editTask} />
          ):(

          <Todo task={todo} testCompleted={testCompleted} deleteTodo={deleteTodo} editTodo={editTodo}/>
          )
        )}
        
        
    </div>
  )
}

export default Todowrapper