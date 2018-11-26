import React, {Component} from 'react';
import Card from './partials/Card';
import design from '../img/pantone.svg';
import code from '../img/programming.svg';
import seo from '../img/analysis.svg';

class Home extends Component {
    render() {
        const designText = "Creation of Logos and brand identities. Designing websites starting from wireframes and mock-ups for a totally customizable experience." + <strong>TEST</strong>;
        const codeText = "Writing clean code for best performance and high scalability. Using the latest technologies, I write the code wether if they are completely custom, or using cms like Magento and Wordpress.";
        const seoText = "Service of optimization for your existing website. I can work on the existing code for the optimization of the code and for improvement in SEO.";
        return (
            <section className="home__container">
                {/* <h1 className="title">Marco Poletto - Frontend Developer</h1> */}
                <section className="home__intro">
                    <div className="home__social">
                        <a href="https://twitter.com/polettoweb" target="_blank" rel="noopener noreferrer"><i className="ion-social-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/marco-poletto-96853774/" target="_blank" rel="noopener noreferrer"><i className="ion-social-linkedin"></i></a>
                        <a href="https://plus.google.com/+MarcoPoletto" target="_blank" rel="noopener noreferrer"><i className="ion-social-googleplus"></i></a>
                        <a href="mailto:marco@marcopoletto.co.uk"><i className="ion-email"></i></a>
                    </div>
                    <div className="home__me">
                        <p>Hello, my name is Marco, I'm a <strong>Frontend</strong> <strong>Web Developer</strong>.<br/> I create websites from scratch using the latest cutting edge web technologies. <strong>Innovation</strong>, <strong>clean code</strong> and <strong>pixel perfect</strong> build characterize all my projects. With attention to details, I always deliver the best solution to the clients according to their requirements.</p>
                        <div className="home__buttons">
                            <a className="button">Download CV</a>
                            <a className="button">Contact Me</a>
                        </div>
                    </div>
                </section>
                <section className="cards__container">
                    <h3>Services</h3>
                    <div className="cards">
                            <Card title="Design" logo={design} text={designText}/>
                            <Card title="Develop" logo={code} text={codeText}/>
                            <Card title="SEO &amp; Optimisation" logo={seo} text={seoText}/>
                    </div>
                </section>
            </section>
        );
    }
}

export default Home;
