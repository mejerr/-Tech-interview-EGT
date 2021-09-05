import { connect } from 'react-redux';
import { selectSlot, consumeSlots, deselectSlot } from '../../actions/slots';
import { areSlotsDisabledSelector } from '../../selectors/slots';
import FinalCountdown from '../../components/games/final-countdown-game';

export default connect((state) => ({
    slots: state.slots.slotsFinalCountdown.ids,
    areDisabled: areSlotsDisabledSelector(state)
}), {
    selectSlot,
    deselectSlot,
    consumeSlots
}
)(FinalCountdown);
