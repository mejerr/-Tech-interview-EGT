import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { changeActiveTab } from '../../../actions/tabs';
import HeaderButtons from '../../../components/common/buttons/header-buttons';

export default withRouter(connect((state) => {
    console.log('state', state)
    return {
        activeTab: state.tabs.activeTab
    };
}, {
    changeActiveTab
})(HeaderButtons));
