import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Divider,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography
} from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from "react";

import Loading from './Tools/Loading'

export default function TodoList(props) {
    const {
        data, isFetching, errmsg,
        get_todolist,
        put_todolist,
    } = props

    const [Todos, setTodos] = useState([])

    useEffect(() => {
        get_todolist()
    }, [])

    useEffect(() => {
        if (!!data) {
            setTodos(data)
        }

        return () => {
            setTodos([])
        }
    }, [data])

    const AddItem = (item) => {
        setTodos([item, ...Todos])
    }

    const DeleteItem = (i) => {
        const items = Array.from(Todos)
        items.splice(i, 1)
        setTodos(items)
    }

    const onSubmit = (data) => {
        put_todolist({ data })
    }

    return (
        <Container maxWidth="md">
            <Card>
                <CardHeader
                    title={<Typography variant="body1">TODO</Typography>}
                    subheader={<Divider />} />
                {
                    isFetching ?
                        <CardContent>
                            <Loading />
                        </CardContent>
                        : <Content
                            Todos={Todos}
                            AddItem={AddItem}
                            DeleteItem={DeleteItem}
                            onSubmit={onSubmit} />
                }
            </Card>
        </Container>
    )
}

export function Content(props) {
    const { Todos, AddItem, DeleteItem, onSubmit } = props
    return (
        <>
            <CardContent>
                <AddListItem AddItem={AddItem} />
            </CardContent>
            <CardContent>
                <ListBoard Todos={Todos} DeleteItem={DeleteItem} />
            </CardContent>
            <CardActions className="jcc">
                <Button onClick={() => onSubmit(Todos)} variant="contained">送出</Button>
            </CardActions>
        </>
    )
}

export function AddListItem(props) {
    const { AddItem } = props
    const [input, setInput] = useState("")

    const onChange = (event) => {
        let value = event.target.value
        setInput(value)
    }

    const handleonClick = (event) => {
        setInput("")
        AddItem(input)
    }

    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={8}>
                <TextField label="Item-Name" value={input} onChange={onChange} fullWidth variant="standard" />
            </Grid>
            <Grid item>
                <Button onClick={handleonClick} variant="contained">新增</Button>
            </Grid>
        </Grid>
    )
}

export function ListBoard(props) {
    const { Todos, DeleteItem } = props
    return (
        <List id="Todo-List-1">
            {
                Todos.map((item, i) => {
                    return (
                        <TodoItem item={item} index={i} key={i} onDelete={() => DeleteItem(i)} />
                    )
                })
            }
        </List>
    )
}

function TodoItem(props) {
    const { item, index, onDelete } = props
    return (
        <ListItem
            id={`Item${index}`}
            divider
            secondaryAction={
                <IconButton edge="end" aria-label="delete" title="刪除" onClick={onDelete}>
                    <FontAwesomeIcon icon="trash" />
                </IconButton>
            } >
            <ListItemText primary={item} />
        </ListItem>
    )
}