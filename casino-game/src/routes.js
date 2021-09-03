import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/home/home';

export const routes = (
    <Switch>
        {/* <Route path='/game' component={Game} /> */}
        <Route path='/' exact component={Home} />
        <Redirect to='/' />
    </Switch>
);