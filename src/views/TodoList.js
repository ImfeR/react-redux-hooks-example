import React,{useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import TodoItem from '../components/TodoItem';
import {Button, Typography, Grid, Box, Divider} from '@mui/material';
import TextField from '@mui/material/TextField';

const TodoList = () => {
  //#2 Used to get a single attribute or object inside the Reducer

  //Get todoList from todoReducer
  const todoList = useSelector(state => state.todos.todoList);

  //Use for all the dispatch actions
  const dispatch = useDispatch();

  //Local state for the input
  const [ inputTodo, setInputTodo ] =  useState('');
  //Local state for the input error message
  const [ errMsg, setErrMsg ] = useState('');

  //Handle onChange event
  const handleInput = (e) =>{
    setInputTodo(e.target.value);
  }

  //Handle onClick event
  const addNewTodo = ()=>{
    //Valid input value
    if(inputTodo.trim().length>1)
    {   
        setErrMsg('');
        let newTodoObject={
            id: Math.random(),
            content:inputTodo
        }
         //Add new todo item into List with the action
        dispatch({type:'ADD_TODO',payload:newTodoObject});
        //Empty input 
        setInputTodo('');
    }
    else{
        //Display Error message
        setErrMsg('Please input something...');
    }
  }

  return (    
    <Box>
      <Typography variant='h3' align='center' className="typography">Todo List</Typography>

      <Grid container direction="column" spacing={2} style={{paddingTop: '15px', paddingBottom: '15px'}}>
        { todoList.length > 0 ?
                todoList.map(item => {
                  return (
                    <Grid item xs>
                      <TodoItem key={item.id} item={item} />
                      <Divider/>
                    </Grid>);
                })
              :
            <Typography align="center" variant="h6">You don't have anything to do! Awesome!</Typography>
        }   

        <Grid item xs>
          <Typography variant='body1' color="red">
            {errMsg}
          </Typography>
        </Grid>

        <Grid item xs>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={11} container alignItems="end">
              <TextField
                id="todo-text"
                variant="standard"
                color="primary"
                fullWidth
                onChange={handleInput}
                value={inputTodo}
                placeholder='Add todo...'
                type="text"
              />
            </Grid>

            <Grid item xs={1} container>
              <Button color="secondary" variant="contained" onClick={addNewTodo} >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>  
    </Box>
  );
}
 
export default TodoList;