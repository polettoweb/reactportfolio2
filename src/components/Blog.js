import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: [],
            dataid: undefined
        }
    }
    componentDidMount() {
        fetch('https://marcopolettouk.firebaseio.com/articles/.json')
            .then(data => {
                return data.json();
            })
            .then(res => {
                const posts = res.map(obj => obj);
                this.setState({ posts });
            })
    }
    clickHandler() {
        this.setState({
            dataid: this.post.id
        });
        console.log(this.state.dataid)
    }
    render() {
        return (
            <div className="blog-cat__home">
                <h1>Blog</h1>
                <div className="blog-cat__container">
                {this.state.posts.map(post => (
                    
                    <article className="blog-cat__post" key={post.id}>
                        {console.log(post)}
                        
                        <Link to={`/Blog/${post.slug}/${post.id}`} slug={post.slug}>
                            <div className="blog-cat__image">
                                <img src={post.thumbnail} alt={this.state.title} className="blog-cat__image"/>
                            </div>
                            <div className="blog-cat__title">
                                <h2>{post.title}</h2>
                            </div>
                            <div className="blog-cat__text">
                                <p>{post.previewText}</p>
                            </div>
                        </Link>
                    </article>
                ))}
                </div>
            </div>
        );
    }
}

export default Blog;
