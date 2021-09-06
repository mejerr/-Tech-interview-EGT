import { connect } from 'react-redux';
import FinalCountDownComments from '../../../components/games/final-countdown-game/final-countdown-comments/final-countdown-comments';

export default connect((state) => ({
    comments: state.finalCountdown.comments.ids
}))(FinalCountDownComments);
