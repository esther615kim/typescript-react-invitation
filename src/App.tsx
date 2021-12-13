import './styled.css';
import CardList from './components/CardList';
import AddGuest from './components/AddGuest';

function App() {
    return (
        <div className="App">
            <div className="banner"></div>
            <h1>Guest List</h1>
            <CardList />
            <AddGuest />
        </div>
    );
}

export default App;

// banner bg plant
// https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80
