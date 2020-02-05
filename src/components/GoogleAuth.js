import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

class GoogleAuth extends Component {
    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: '531205529791-b6ranudvc34gni9hu3pqgr7ped88gicd.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    };
    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        const { isSignedIn } = this.state;
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return (
                <button
                    onClick={this.onSignOut}
                    className='button is-small'
                    style={{ backgroundColor: '#E1459F', color: '#f4f6f4', border: 'none' }}>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.onSignIn}
                    className='button is-small'
                    style={{ backgroundColor: '#E1459F', color: '#f4f6f4', border: 'none' }}>
                    <FontAwesomeIcon icon={faGoogle} />
                    &nbsp; Sign In
                </button>
            );
        }
    }

    render() {
        return <div className='has-text-white'>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;
