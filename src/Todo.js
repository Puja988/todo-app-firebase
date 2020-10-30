import React, {useState} from 'react'
import './Todo.css'
import db from './firebase';
import { ListItem, ListItemText, List, ListItemAvatar, Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      padding: theme.spacing(2, 4, 3)
    }
}))

const Todo = ({text}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('')

    const updateTodo = () => {
        db.collection('todos').doc(text.id).set({
            todo: input
        }, { merge: true })  // merge: true prevents you from overwriting
        setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>I am modal</h1>
                    <input placeholder={text.todo} value={input} onChange={e => setInput(e.target.value)}/>
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItem>
                <ListItemAvatar>  
                </ListItemAvatar>
                    <ListItemText primary={text.todo} />
                    <Button onClick={ () => db.collection('todos').doc(text.id).delete() }>DELETE ME</Button>
                </ListItem>
                <button onClick={() => setOpen(true)}>Edit</button>
            </List>
        </>
    )
}

export default Todo
