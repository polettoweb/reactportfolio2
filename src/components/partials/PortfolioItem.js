import React, {Component} from 'react';

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
    preventDefault(e) {
        e.preventDefault();
    }

    render() {
        let tags = this.tags.split(",");
        return (
            <div className="portfolio__box">
                <div className="portfolio__img">
                    <a href={this.link} title={this.linkTitle} target="_blank" rel="noopener noreferrer">
                        <img src={this.image} alt={this.linkTitle} />
                    </a>
                </div>
                <div className="portfolio__links">
                    <p className="portfolio__links-text">{this.text}</p>
                    {this.linkGit ? <a href={this.linkGit} title={this.linkGitTitle} target="_blank" className="portfolio__links-git" rel="noopener noreferrer"><img src="img/GitHub.png" alt="GitHub Logo"/></a> : ''}
                </div>
                <div className="portfolio__tags">
                    {tags.map(tag => {
                        return <a target="_self" key={tag} href={this.preventDefault}>{tag}</a>
                    })
                    }
                </div>
            </div>
        )
    }
}

export default PortfolioItem;