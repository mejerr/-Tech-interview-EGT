import { connect } from 'react-redux';
import { changeBetAmount } from '../../../actions/final-countdown-game';
import FinalCountdownFooter from '../../../components/games/final-countdown-game/final-countdown-footer';

export default connect((state) => ({
    totalSum: state.finalCountdown.totalSum,
    betAmount: state.finalCountdown.betAmount
}), {
    changeBetAmount
}
)(FinalCountdownFooter);
