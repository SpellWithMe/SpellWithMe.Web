import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';  
import {connect} from 'react-redux'; 

import * as sessionActions from '../../actions/sessionActions';
import config from '../../google.config';

class GoogleLogin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {credentials: {token: ''}};
        this.googleLogin = this.googleLogin.bind(this);
    }
    
    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
        })();    
    }
    
    //Triggering login for google
    googleLogin(event) {
        event.preventDefault();
        let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: config.clientid,
            cookiepolicy: "single_host_origin",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    googleSignInCallback = (e) => {
        console.log('googleSignInCallback');
        console.log( e )
        if (e["status"]["signed_in"]) {
            const credentials = this.state.credentials;
            credentials.token = e.id_token;
            console.log(this.props.actions);
            this.setState({credentials: credentials});
            this.props.actions.logInUser(this.state.credentials);
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }
    
    render(){
        return(
            <div className="g-signin2"  id="my-signin2" onClick={ this.googleLogin }></div>
        )
    }
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(GoogleLogin);