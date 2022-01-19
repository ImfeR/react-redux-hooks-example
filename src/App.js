import React from 'react';
import TodoList from './views/TodoList';
import { Container } from '@mui/material';

function App() {
    return (
        <main style={{ background: "#615D6C", height: "100vh"}}>
            <Container maxWidth="md">
                {/* Please check /views/TodoList.js for detail*/}
                <TodoList />
            </Container>
        </main>
    );
}

export default App;
