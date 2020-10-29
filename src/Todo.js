import React from 'react'
import './Todo.css'
import db from './firebase';
import { ListItem, ListItemText, List, ListItemAvatar, Button } from '@material-ui/core';

const Todo = ({text}) => {
    return (
        <List className="todo__list">
            <ListItem button>
                <ListItemAvatar>  
                </ListItemAvatar>
                <ListItemText primary={text.todo} />
                <Button onClick={ () => db.collection('todos').doc(text.id).delete() }>DELETE ME</Button>
            </ListItem>
        </List>
    )
}

export default Todo
