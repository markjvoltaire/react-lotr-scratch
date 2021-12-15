import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Films from './views/Films/Films';

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
        </header>

        <Switch>
          <Route exact path="/films" component={Films} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
