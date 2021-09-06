import { connect } from 'react-redux';
import Games from '../../components/games/games';
import { setCurrentGame } from '../../actions/games';

export default connect(null, {
    setCurrentGame
})(Games);
