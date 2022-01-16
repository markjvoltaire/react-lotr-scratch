import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';
import BookList from './components/Books/BookList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/films" data-testid="film-link">
            Films
          </NavLink>

          <NavLink to="/characters" data-testid="char-link">
            Characters
          </NavLink>

          <NavLink to="/books">BookList</NavLink>
        </header>

        <Switch>
          <Route exact path="/films" component={Films} />
          <Route exact path="/books" component={BookList} />
          <Route exact patch="/characters" component={Characters} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
