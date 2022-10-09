import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SnackbarProvider } from 'notistack'
import Notifier from './Notifier'
import TodoList from '../containers/TodoList'
import { Button } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const theme = createTheme({
    palette: {
        primary: {
            dark: '#093170',
            main: '#0d47a1',
            light: '#3d6bb3',
            contrastText: '#fff',
        },
        secondary: {
            dark: '#b2741a',
            main: '#ffa726',
            light: '#ffb851',
            contrastText: '#74490a',
        },
        text: {
            disabled: 'rgba(0, 0, 0, 0.5)'
        },
        action: {
            disabled: 'rgba(0, 0, 0, 0.6)'
        }
    },
})

export default function Main(props) {
    const notistackRef = useRef(null)
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider
                maxSnack={3}
                ref={notistackRef}
                action={(key) => (
                    <Button style={{ color: "inherit" }} onClick={() => this.onClickClose(key)}>
                        <FontAwesomeIcon icon="times" />
                    </Button>
                )}
            >
                <Notifier />
                <div className="view">
                    <div className="main">
                        <Routes>
                            <Route index element={<TodoList />} />
                        </Routes>
                    </div>
                </div>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

