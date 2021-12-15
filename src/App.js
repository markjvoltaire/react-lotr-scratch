import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Films from './views/Films/Films';
import Characters from './views/Characters/Characters';

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

        <Switch>
          <Route exact patch="/characters" component={Characters} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
