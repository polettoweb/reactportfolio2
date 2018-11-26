import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class BlogWidget extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.logo = this.props.logo;
        this.text = this.props.text;
        this.link = this.props.link;
    }
    render() {
      return (
        <div className="blog-cat__post">
            <div className="blog-cat__image">
                <img src={this.logo} alt={this.title}/>
            </div>
            <div className="blog-cat__title">
                <p>{this.title}</p>
            </div>
            <div className="blog-cat__text">
                <p dangerouslySetInnerHTML={{ __html: this.text}}></p>
            </div>
            <div className="blog-cat__link">
                <Link to={this.link}>Read More</Link>
            </div>
        </div>
      );
    }
  }

  export default BlogWidget;