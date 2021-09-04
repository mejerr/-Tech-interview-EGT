import { connect } from 'react-redux';
import FinalCountdown from '../../components/games/final-countdown-game';
import { selectSlot, consumeSlots } from '../../actions/slots';

export default connect((state) => ({
    slots: state.slots.ids
}), {
    selectSlot,
    consumeSlots
}
)(FinalCountdown);
