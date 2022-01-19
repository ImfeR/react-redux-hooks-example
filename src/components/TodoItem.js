import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

//Single todo item component
const TodoItem = (props) => {
    //Get todoList from todoReducer
    const todoList = useSelector(state => state.todos.todoList)
    //Use for all the dispatch actions
    const dispatch = useDispatch();

    //Remove single todo in the list
    const removeTodoItem = (todoId) => {
        //filter to get the todoId which need to be remove
        let newTodoList = todoList.filter(item => item.id !== todoId);
        dispatch({type: 'REMOVE_TODO', payload: newTodoList})

    }

    return (
        <Box key={props.item.id}>
            <Grid container direction="row" justifyContent="space-between">
                <Grid item xs={10} container alignItems="center" >
                    <Typography variant="h6">
                        {props.item.content}
                    </Typography>
                </Grid>

                <Grid item xs={1} container justifyContent="end" alignItems="center">
                    <IconButton size="large" onClick={() => {removeTodoItem(props.item.id)}}>
                        <ClearIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}

export default TodoItem;