import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { changeActiveTab } from '../../../actions/tabs';
import WelcomeButtons from '../../../components/common/buttons/welcome-buttons';

export default withRouter(connect((state) => ({
    currentGame: state.games.currentGame.gameAlt
}), {
    changeActiveTab
})(WelcomeButtons));
