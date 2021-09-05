import { connect } from 'react-redux';
import { setCurrentGame } from '../actions/games';
import { withRouter } from 'react-router-dom';
import App from '../components/App';

export default withRouter(connect((state) => {

}, {
    setCurrentGame
})(App));