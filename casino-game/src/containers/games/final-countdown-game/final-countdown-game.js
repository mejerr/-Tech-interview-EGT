import { connect } from 'react-redux';
import { selectSlot, consumeSlots, deselectSlot, showComments, initComments } from '../../../actions/final-countdown-game';
import { areSlotsDisabledSelector } from '../../../selectors/slots';
import FinalCountdown from '../../../components/games/final-countdown-game/final-countdown-game';

export default connect((state) => ({
    slots: state.finalCountdown.ids,
    areDisabled: areSlotsDisabledSelector(state),
    comments: state.finalCountdown.comments.ids
}), {
    selectSlot,
    deselectSlot,
    consumeSlots,
    showComments,
    initComments
}
)(FinalCountdown);
