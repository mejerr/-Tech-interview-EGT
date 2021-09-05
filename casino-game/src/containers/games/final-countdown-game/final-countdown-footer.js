import { connect } from 'react-redux';
import { changeBetAmount } from '../../../actions/slots';
import FinalCountdownFooter from '../../../components/games/final-countdown-game/final-countdown-footer';

export default connect((state) => ({
    totalSum: state.slots.slotsFinalCountdown.totalSum,
    betAmount: state.slots.slotsFinalCountdown.betAmount
}), {
    changeBetAmount
}
)(FinalCountdownFooter);
