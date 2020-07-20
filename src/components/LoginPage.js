import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { login } from '../actions/auth';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    signup = (response) => {
        const googleResponse = {
            name: response.profileObj.name,
            email: response.profileObj.email,
            token: response.googleId,
            image: response.profileObj.imageUrl,
            providerId: "Google"
        };
        
        axios.post("http://localhost:8088/expensify-app-backend/login/social-media-data", googleResponse).then(
            (result) => {                              
                sessionStorage.setItem("userData", JSON.stringify(result));
                this.props.login(result.data.id);                
            });
    }

    render() {
        const responseGoogle = (response) => {
            console.log(response);
            var res = response.profileObj;
            console.log(res);
            this.signup(response);
        }

        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify</h1>   
                    <p>It's time to get your expenses under control.</p>          
                    <GoogleLogin
                        className="button"
                        clientId="759813162371-7gbdrtc3h308cpkfc2fua44df2p6kqq0.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        //cookiePolicy={'single_host_origin'}                        
                    />                                                    
                </div>
            </div>            
        )

    }
} 

const mapDispatchToProps = (dispatch) => ({
    login: (userId) => dispatch(login(userId))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);