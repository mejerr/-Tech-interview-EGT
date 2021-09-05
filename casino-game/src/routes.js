import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/home/home';
import Games from './containers/games/games';
import FinalCountdown from './containers/games/final-countdown-game/final-countdown-game';

export const routes = (
    <Switch>
        <Route path='/games/fn' component={FinalCountdown} />
        <Route path='/games' component={Games} />
        <Route path='/' exact component={Home} />
        <Redirect to='/' />
    </Switch>
);