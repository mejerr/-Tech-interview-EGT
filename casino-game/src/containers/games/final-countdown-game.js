import { connect } from 'react-redux';
import { selectSlot, consumeSlots, shouldDisableSlots } from '../../actions/slots';
import FinalCountdown from '../../components/games/final-countdown-game';

export default connect((state) => ({
    slots: state.slots.slotsFinalCountdown.ids,
    areDisabled: state.slots.slotsFinalCountdown.areDisabled
}), {
    selectSlot,
    consumeSlots,
    shouldDisableSlots
}
)(FinalCountdown);
