import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './fullstate.scss';

class fullstate extends Component {

    state = {

    }

    static getDerivedStateFromProps() { }

    shouldComponentUpdate(nextProps, nextState) { }

    render() {
        return (
            <div className="baseClass">

            </div>
        );
    }

    componentDidMount() { }

    getSnapshotBeforeUpdate(prevProps, prevState) { }

    componentDidUpdate(prevProps, prevState, snapshot) { }

    componentWillUnmount() { }

    static getDerivedStateFromError(error) { }

    componentDidCatch(error, info) { }
}

fullstate.defaultName = "fullstate";

fullstate.propTypes = {

}

export default fullstate;
