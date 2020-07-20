import React from 'react';
import { connect } from 'react-redux';
import {Link, Redirect } from 'react-router-dom';
import GoogleLogout from 'react-google-login';
import { logout } from '../actions/auth';
import { history } from '../routers/AppRouter';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSigneIn: true
        };
    }

    startLogout = () => {
        var auth2 = gapi.auth2.getAuthInstance();                
        this.setState(() => {isSigneIn: false});
        this.props.logout();                                    
        
        auth2.signOut().then(function (state) {
            auth2.disconnect().then();
            
        });                      
        
    };

    render() {
        return (

            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/dashboard">
                          <h1>Expensify</h1>
                        </Link>                                
                            <GoogleLogout 
                                className="button button--link"
                                clientId="759813162371-7gbdrtc3h308cpkfc2fua44df2p6kqq0.apps.googleusercontent.com"
                                buttonText="Logout"
                                onSuccess={this.startLogout}                                                                
                            />                                                
                    </div>
                </div>        
            </header>
        );
    };

}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(Header);
