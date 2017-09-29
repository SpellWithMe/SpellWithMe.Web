import React, { Component } from 'react';

//import config from '../google.config';

class GoogleLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {loggedin: false};
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
    googleLogin = () => {
        console.log('googleLogin');
        let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: '186009652982-3r4j019r0booqvbbsevd9vflephdfaut.apps.googleusercontent.com', //Google client Id
            cookiepolicy: "single_host_origin",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    googleSignInCallback = (e) => {
        console.log('googleSignInCallback');
        console.log( e )
        if (e["status"]["signed_in"]) {
            
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }
    
    render(){
        return(
            <div className="g-signin2"  id="my-signin2" onClick={ () => this.googleLogin() }></div>
        )
    }
}

export default GoogleLogin;