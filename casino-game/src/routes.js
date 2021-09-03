import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/home/home';
import Games from './containers/games';

export const routes = (
    <Switch>
        <Route path='/games' component={Games} />
        <Route path='/' exact component={Home} />
        <Redirect to='/' />
    </Switch>
);