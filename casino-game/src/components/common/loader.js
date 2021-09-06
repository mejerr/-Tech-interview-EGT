import React, { memo } from 'react';
import classNames from 'classnames';
import LoaderSpinner from "react-loader-spinner";

const Loader = memo((props) => {
    const { className } = props;

    return (
        <div className={classNames('loader-container', {
            [className] : className
        })}>
            <LoaderSpinner className="loader-state" width={30} height={30} type="Puff" color="#FFFFFF"/>
        </div>
    );
});

Loader.defaultProps = {
    className: ''
};

export default Loader;
