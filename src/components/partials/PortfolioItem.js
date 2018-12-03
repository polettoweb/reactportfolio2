import React, {Component} from 'react';
import styled from 'styled-components';

const PortfolioBox = styled.div`
    width: 100%;
    height: calc(100vh - 160px);
    min-width: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 0 30px;

    .portfolio__img {
        right: 50px;
        top: 10%;
        width: 50%;
        max-width: 960px;
        height: 600px;
        overflow: hidden;
        opacity: 0.8;
        box-shadow: 25px 25px 0px rgba(255,255,255,0.3);
        
        a {
            display: block;
            width: 100%;
            height: 100%;
        }
        img {
            height: 100%;
        }
        .overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            background: rgba(0,0,0,0.6);
            z-index: 100;
        }
    }
    .portfolio__links {
        background-color: rgba(255,255,255,0.2);
        padding: 10px;
        color: white;
        font-size: 40px;
        width: 90%;
        max-width: 960px;
        margin: 0 auto;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .portfolio__tags {
        color: white;
        font-size: 24px;
        width: 50%;
        letter-spacing: 2px;
        font-size: 32px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

    }
`;

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.image = this.props.image;
        this.text = this.props.text;
        this.link = this.props.link;
        this.linkTitle = this.props.linkTitle;
        this.linkGit = this.props.linkGit;
        this.tags = this.props.tags;
        this.linkGitTitle = this.props.linkGitTitle;
    }
    render() {
        let tags = this.tags.split(",");
        return (
            <PortfolioBox>
                <div className="portfolio__tags">
                    {tags.map(tag => {
                        return <p key={tag} style={{marginLeft: `${Math.random() * 70}%`}}>{tag}</p>
                    })
                    }
                </div>
                <div className="portfolio__img" >
                    {/* <div className="overlay"></div> */}
                    <a href={this.link} title={this.linkTitle} target="_blank" rel="noopener noreferrer">
                        <img src={this.image} alt={this.linkTitle} />
                    </a>
                </div>
                <div className="portfolio__links">
                    <p className="portfolio__links-text">{this.text}</p>
                    {this.linkGit ? <a href={this.linkGit} title={this.linkGitTitle} target="_blank" className="portfolio__links-git" rel="noopener noreferrer"><img src="img/GitHub.png" alt="GitHub Logo"/></a> : ''}
                </div>
                
                
            </PortfolioBox>
        )
    }
}

export default PortfolioItem;