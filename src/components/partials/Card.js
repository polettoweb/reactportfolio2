import React, {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.logo = this.props.logo;
        this.text = this.props.text;
    }
    render() {
      return (
        <div className="card">
            <div className="card__logo">
                <img src={this.logo} alt={this.title}/>
            </div>
            <div className="card__title">
                <p>{this.title}</p>
            </div>
            <div className="card__text">
                <p>{this.text}</p>
            </div>
        </div>
      );
    }
  }

  export default Card;