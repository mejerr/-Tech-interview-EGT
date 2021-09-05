import React, { memo } from 'react';
import HeaderButtons from '../../containers/common/buttons/header-buttons';
import egtIcon from '../../assets/egt-icon.png';

const Header = memo((props) => {
    const { title  } = props;

    return (
        <div className="header-container">
            <img className="egt-icon" src={egtIcon} alt="egt-logo"></img>
            <div className="title">{title}</div>
            <HeaderButtons />
        </div>
    );
});

Header.defaultProps = {
    title: 'EGT Casino games'
};

export default Header;
