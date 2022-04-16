import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { api } from 'services';
import exceptionHandler from 'services/exceptionHandler';
import Loadings from 'shared/loadings/Loadings';
import './fullstate.scss';

class fullstate extends Component {

    state = {
        loading: false
    }

    static getDerivedStateFromProps() { }

    shouldComponentUpdate(nextProps, nextState) { }

    render() {
        const { loading } = this.state;
        return (
            <div className="baseClass">
                <Loadings type="page" spinning={loading}>

                </Loadings>
            </div>
        );
    }

    componentDidMount() {

        this.getData();
    }

    /**
     * get data
     */
    getData = () => {
        const { loading } = this.state;
        if (loading) return;
        this.setState({ loading: true })
        let params = {

        }

        api.get("/", params)
            // .then(response => response.data.result)
            .then((Response) => {

            })
            .catch((error) => {
                exceptionHandler(error);
            })
            .then(() => {
                this.setState({ loading: false })
            })
    }

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
