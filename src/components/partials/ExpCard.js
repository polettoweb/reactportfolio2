import React, {Component} from 'react';

class ExpCard extends Component {
    constructor(props) {
        super(props);
        this.number = this.props.number;
        this.title = this.props.title;
        this.location = this.props.location;
        this.date = this.props.date;
        this.text = this.props.text;
    }
    render() {
      return (
        <li className={this.number + ' expcard'}>
            <i className="ion-ios-circle-filled"></i>
            <div className="expcard__title">
                <p>{this.title}</p>
            </div>
            <div className="expcard__text">
                <p className="expcard__location">{this.location}</p>
                <p className="expcard__date">{this.date}</p>
                <p className="expcard__text">{this.text}</p>
            </div>
        </li>
      );
    }
  }

  export default ExpCard;