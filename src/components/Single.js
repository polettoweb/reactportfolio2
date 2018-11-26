import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Single extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: '',
            thumbnail: '',
            title: '',
            content: ''
        }
    }
    componentDidMount() {
        console.log(this.props.match.params);
        fetch('https://marcopolettouk.firebaseio.com/articles/.json')
            .then(data => {
                return data.json();
            })
            .then(res => {
                console.log(res);
                res = res.filter(el => {return el.slug === this.props.match.params.slug})[0]
                console.log(res)
                const posts = res;
                const thumbnail = posts.thumbnail;
                const title = posts.title;
                const content = posts.content;
                this.setState({ posts, thumbnail, title, content });
            })
    }
    render() {
        return (
            <div className="blog__container">
                <section> 
                    <h1>{this.state.title}</h1>
                    <div className="blog__image">
                        <img src={this.state.thumbnail}  alt={this.state.title} />
                    </div>
                    <div className="post" >
                        <p>{this.state.content}</p>
                    </div>
                    <div className="blog__back-container"><Link to="/Blog" className="blog__back">Go Back</Link></div>
                </section>
            </div>
        );
    }
}

export default Single;
