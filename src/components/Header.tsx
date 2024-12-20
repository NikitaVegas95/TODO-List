import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Todo List</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Все задачи</Link>
                    </li>
                    <li>
                        <Link to="/active">Невыполненные</Link>
                    </li>
                    <li>
                        <Link to="/completed">Выполненные</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;