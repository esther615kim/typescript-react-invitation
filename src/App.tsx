import './styled.css';
import CardList from './components/CardList';

function App() {
    return (
        <div className="App">
            {/* banner */}
            <div className="banner"></div>
            {/* invited list */}
            <h1>Guest List</h1>
            <CardList />
            {/* totals */}
        </div>
    );
}

export default App;
