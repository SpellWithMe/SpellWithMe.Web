import { Router, Route, Switch } from 'react-router-dom';
const MyApp = () => (
    <Router history={history}>
        <Switch>
            <Route path="/login" component={App} />
        </Switch>
    </Router>
)