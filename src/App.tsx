import React from 'react';
import './styled.css';
import CardList from './components/CardList';

function App() {
    return (
        <div className="App">
            <div className="banner"></div>
            <h1>Guest List</h1>
            <CardList />
        </div>
    );
}

export default App;
