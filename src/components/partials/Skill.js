import React, {Component} from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.text = this.props.text;
        this.children = this.props.children;
    }
    render() {
        return (
            <div className="skill">
                <h4>{this.title}</h4>
                {this.props.children}
            </div>
        );
    }
}

export default Skill;