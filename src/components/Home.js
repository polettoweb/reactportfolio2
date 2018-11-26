import React, {Component} from 'react';
import me from '../img/marco.png';
import styled from 'styled-components';
import Tilt from 'react-tilt';

const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;
const ImageStyle = styled.img`
display: block;
margin-left: 20px;
`;
const TiltStyle = {
    width: '500px',
    height: 'auto',
    position: 'absolute',
    top: '25%',
    left: '10%',
    transform: 'rotateY(40deg)',
    background: 'rgba(255, 255, 255, 0.1)'
}
const IntroContainer = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
`;
const H1 = styled.h1`
    font-size: 3em;
    color: #ffffff;
    text-align: left;
`;


class Home extends Component {
    handleMouseLeave(e) {
        // console.log(e.target);

        // setTimeout(function (){
        //     return e.target.style.transform = "rotateY(40deg)";
        // },500)
        
    }

    render() {
        return (
            <HomeContainer>
                <IntroContainer>
                    <Tilt style={TiltStyle} onMouseLeave={this.handleMouseLeave} className="Tilt" options={{ max: 40, perspective: 1000, reverse: true, onMouseLeave: 'transform: rotateY(40deg)'}}>
                        <ImageStyle src={me} alt=""/>
                    </Tilt>
                    <div>
                        <H1>Hi, I'm Marco, <br/><span>Frontend Developer<br/>and UI Engineer</span></H1>
                    </div>
                </IntroContainer>

            </HomeContainer>

        );
    }
}

export default Home;
