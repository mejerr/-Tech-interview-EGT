import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import HeaderButtons from '../../../components/common/buttons/header-buttons';
import { changeActiveTab } from '../../../actions/tabs';

export default withRouter(connect((state) => {
    return {
        activeTab: state.tabs.activeTab
    };
}, {
    changeActiveTab
}
)(HeaderButtons));
