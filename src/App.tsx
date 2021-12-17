import './styled.css';
import CardList from './components/CardList';
import AddGuest from './components/AddGuest';
import { GUESTS, Invited } from './components/data';
import { GuestsContext } from './contexts/GuestsContext'; // Context
import { useState } from 'react';

function App() {
    const [guests, setGuests] = useState(GUESTS); // type
    // console.log(guests.length);
    return (
        <div className="App">
            <GuestsContext.Provider value={{ guests, setGuests }}>
                <div className="banner"></div>
                <h1>Guest List</h1>
                <CardList />
                <AddGuest />
            </GuestsContext.Provider>
        </div>
    );
}

export default App;

// banner bg plant
// https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80
