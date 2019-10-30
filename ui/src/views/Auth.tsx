import React = require('preact');
import {Component} from 'preact';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';


interface AuthProps {
    openAuth(): void;

    closeAuth(): void;
}

interface State {
    modal: boolean;
    user: firebase.User | null;
}


export default class Auth extends Component<AuthProps, State> {
    ui: firebaseui.auth.AuthUI;
    uiConfig: {};

    constructor() {
        super();
        let self = this;

        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        this.uiConfig = {
            autoUpgradeAnonymousUsers: true,
            callbacks: {
                signInSuccessWithAuthResult: function (authResult: any, redirectUrl: any) {
                    console.log(authResult, redirectUrl);
                    self.props.closeAuth();
                    return false;
                },
            },
            // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
            signInFlow: 'popup',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
                },
            ],
        };

        this.state = {
            modal: false,
            user: null,
        };

        this.openAuth = this.openAuth.bind(this);
    }

    private openAuth() {
        this.ui.start('#firebaseui-auth-container', this.uiConfig);
        this.props.openAuth();
    }

    componentDidMount(): void {
        if (this.ui.isPendingRedirect()) {
            this.ui.start('#firebaseui-auth-container', this.uiConfig);
            this.props.openAuth();
        }

        let self = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                self.setState({
                    user: user,
                });
            } else {
                self.setState({
                    user: null,
                });
            }
        });

    }

    public render() {
        if (this.state.user) {
            return <div className='login'>
                <span>Welcome {this.state.user.displayName}</span>
                {this.state.user.photoURL ? <img src={this.state.user.photoURL} alt=""/> : null}
            </div>;
        }

        return <div className='login'>
            <button onClick={this.openAuth}>Login</button>
        </div>;
    }
}

interface AuthModalProps {
    visible: boolean;

    onClose(): void;
}

export class AuthModal extends Component<AuthModalProps, {}> {
    public render() {

        return (
            <div class='modal'>
                <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible}/>
                <label for='modal_1' class='overlay'/>
                <article class='LoginModal__container'>
                    <header class='LoginModal__header'>
                        <h3>Login</h3>
                        <a class='LoginModal__close close'
                           onClick={this.props.onClose}>&times;</a>
                    </header>

                    <section class='SelectModel__content'>
                        <div id='firebaseui-auth-container'/>
                    </section>
                </article>
            </div>
        );
    }
}

