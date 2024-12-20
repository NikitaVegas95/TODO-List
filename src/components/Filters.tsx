import React from 'react';

const Filters = ({ filter, setFilter }) => {
    return (
        <div className="filters">
            <button
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
            >
                Все
            </button>
            <button
                className={filter === 'active' ? 'active' : ''}
                onClick={() => setFilter('active')}
            >
                Невыполненные
            </button>
            <button
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
            >
                Выполненные
            </button>
        </div>
    );
};

export default Filters;