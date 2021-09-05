import { connect } from 'react-redux';
import Home from '../../components/home/home';

export default connect((state) => ({
    currentGame: state.games.currentGame
}), {

}
)(Home);
