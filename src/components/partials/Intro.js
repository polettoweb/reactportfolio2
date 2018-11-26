import React, { Component } from 'react';
import styled from 'styled-components';

const IntroComponent = styled.section`
    width: 100%;
    padding-top: 70px;
    position: relative;

    
`;



class Intro extends Component {
    render() {
        return (
            <IntroComponent>
                <h1>{this.props.h1}</h1>
                <p>{this.props.sub}</p>
                <div className="home__buttons">
                    <a class="button" href={this.props.ctaLink} target="_blank" rel="noopener noreferrer" title="Download CV">{this.props.ctaText}</a>
                </div>
                
            </IntroComponent>
        );
    }
}

export default Intro;