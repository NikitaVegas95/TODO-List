import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { TodoProvider } from './context/TodoContext';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <TodoProvider>
            <Router>
                <Header />
                <div className="container">
                    <AddTodo /> {/* Добавим форму для создания задач */}
                    <Routes>
                        {/* Главная страница - все задачи */}
                        <Route path="/" element={<TodoList filter="all" />} />
                        {/* Страница с выполненными задачами */}
                        <Route path="/completed" element={<TodoList filter="completed" />} />
                        {/* Страница с невыполненными задачами */}
                        <Route path="/active" element={<TodoList filter="active" />} />
                    </Routes>
                </div>
            </Router>
        </TodoProvider>
    );
};

export default App;