import React from 'react';
import ReactDOM from 'react-dom';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
const messages = {
  test: 'holas',
};

ReactDOM.render(
  <IntlProvider messages={messages} locale="es" defaultLocale="es">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <div>
              <FormattedMessage id="test" /> about
            </div>
          </Route>
          <Route path="/users">
            <div>users</div>
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
