import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loadings from 'shared/loadings/Loadings';
import './stateless.scss';

let stateless = (props) => {
    const { } = props;
    const [loading, setLoading] = useState(false)

    useEffect(() => {

    }, []);

    return (
        <div className="baseClass">
            <Loadings type="box" spinning={loading}>

            </Loadings>
        </div>
    );
};

stateless.defaultName = "stateless";

stateless.propTypes = {

}

export default stateless;