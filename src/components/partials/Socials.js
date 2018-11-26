import React, { Component } from 'react';

class Socials extends Component {
    render() {
        return (
            <div className="home__social">
                <a href="https://github.com/polettoweb" title="GitHub Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-github"></i></a>
                <a href="https://twitter.com/polettoweb" title="Twitter Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-twitter"></i></a>
                <a href="https://www.linkedin.com/in/marco-poletto-96853774/" title="Linkedin Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-linkedin"></i></a>
                <a href="https://plus.google.com/+MarcoPoletto" title="Google+ Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-googleplus"></i></a>
                <a href="mailto:marco@marcopoletto.co.uk" title="Contact me via email"><i className="ion-email"></i></a>
            </div>
        );
    }
}

export default Socials;