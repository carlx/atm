import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import KeyPad from '../components/KeyPad/KeyPad';
import Display from '../components/Display/Display';
import { createStructuredSelector } from 'reselect';
import {
    cancelKeyPress,
    clearKeyPress,
    deposit,
    enterKeyPress,
    numberKeyPress,
    withdraw
} from '../actions/atm';
import {
    makeSelectAccountBalance,
    makeSelectAtmInternalState,
    makeSelectErrorMessage,
    makeSelectKeyPadInput,
} from '../selectors/atm';
import Start from '../components/Screens/Start';
import {
    ATM_STATE_DEPOSIT,
    ATM_STATE_ERROR,
    ATM_STATE_WITHDRAW
} from '../domain/atm/state/constants';
import Withdraw from '../components/Screens/Withdraw';
import Deposit from '../components/Screens/Deposit';
import Error from '../components/Screens/Error';

class Atm extends Component {

    renderScreen = () => {
        switch (this.props.atmInternalState) {
            case ATM_STATE_DEPOSIT:
                return <Deposit amount={this.props.keyPadInput}/>;
            case ATM_STATE_WITHDRAW:
                return <Withdraw amount={this.props.keyPadInput}/>;
            case ATM_STATE_ERROR:
                return <Error errorMessage={this.props.errorMessage}/>;
            default:
                return <Start
                    withdrawRequest={this.props.withdrawRequest}
                    depositRequest={this.props.depositRequest}
                />
        }
    };

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-sm text-right mb-2'>
                            <h5 className='card-title badge badge-primary atm-badge'>ATM</h5>
                        </div>
                    </div>
                    <Display
                        accountBalance={this.props.accountBalance}
                    >
                        {this.renderScreen()}
                    </Display>
                    <KeyPad
                        numberKeyPress={this.props.numberKeyPress}
                        enterKeyPress={this.props.enterKeyPress}
                        cancelKeyPress={this.props.cancelKeyPress}
                        clearKeyPress={this.props.clearKeyPress}
                    />
                </div>
            </div>
        );
    }
}

Atm.propTypes = {
    numberKeyPress: PropTypes.func.isRequired,
    enterKeyPress: PropTypes.func.isRequired,
    cancelKeyPress: PropTypes.func.isRequired,
    clearKeyPress: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    keyPadInput: PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
    return {
        withdrawRequest: () => (dispatch(withdraw())),
        depositRequest: () => (dispatch(deposit())),
        numberKeyPress: (value) => () => (dispatch(numberKeyPress(value))),
        enterKeyPress: () => (dispatch(enterKeyPress())),
        cancelKeyPress: () => (dispatch(cancelKeyPress())),
        clearKeyPress: () => (dispatch(clearKeyPress()))
    };
}

const mapStateToProps = createStructuredSelector({
    atmInternalState: makeSelectAtmInternalState(),
    keyPadInput: makeSelectKeyPadInput(),
    accountBalance: makeSelectAccountBalance(),
    errorMessage: makeSelectErrorMessage()
});

export default connect(mapStateToProps, mapDispatchToProps)(Atm);
