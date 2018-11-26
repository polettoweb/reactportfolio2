import React, { Component } from "react";
import PortfolioItem from "./partials/PortfolioItem";

const portfolioItems = [
  {
    "text" : "This portfolio using React.JS as framework.",
    "image":"img/react.png",
    "tags":"React.JS, React-router, Sass",
    "link":"https://github.com/polettoweb/reactportfolio",
    "linkTitle":"React portfolio Github repository",
    "linkGit":"https://github.com/polettoweb/reactportfolio",
    "linkGitTitle":"React portfolio Github repository"
  },
  {
    "text" : "Second version of the portfolio using Nuxt.JS as framework.",
    "image":"img/nuxtCover.jpg",
    "tags":"Nuxt.JS, Vue.JS, Vuex, Sass",
    "link":"https://nuxt.marcopoletto.co.uk",
    "linkTitle":"Marco Poletto Nuxt.JS",
    "linkGit":"https://github.com/polettoweb/nuxtportfolio",
    "linkGitTitle":"Nuxt portfolio Github repository"
  },
  {
    "text " : "First version of the portfolio using Vue.JS as framework.",
    "image" :"img/vue.jpg",
    "tags" :"Vue.JS, Vuex, Sass",
    "link" :"https://vue.marcopoletto.co.uk",
    "linkTitle" :"Marco Poletto Vue.JS",
    "linkGit" :"https://github.com/polettoweb/vueportfolio",
    "linkGitTitle" :"Vue portfolio Github repository"
  },
  {
    "text " : "Small example of ecommerce functionality in Vue.JS",
    "image" :"img/vueCover.jpg",
    "tags" :"Vue.JS, vue-resource, Imageur API",
    "link" :"https://small-ecommerce-example-vuejs-ldaubcucrv.now.sh/",
    "linkTitle" :"Small ecommerce example in Vue.JS",
    "linkGit" :"https://github.com/polettoweb/vue-small-ecommerce",
    "linkGitTitle" :"Vue eCommerce Github repository"
  },
  {
    "text " : "Todo list Built with Vue.JS",
    "image" :"img/vueCover.jpg",
    "tags" :"Vue.JS",
    "link" :"https://github.com/polettoweb/todo-vue",
    "linkTitle" :"Todo list Built with Vue.JS",
    "linkGit" :"https://github.com/polettoweb/todo-vue",
    "linkGitTitle" :"Todo list Built with Vue.JS"
  }
];
class Workshop extends Component {
  render() {
    return (
      <div className="portfolio">
      <div className="portfolio__content">
        <h1>Workshop</h1>
        {portfolioItems.map(item=> {
          return (
              <PortfolioItem
              text={item.text}
              image={item.image}
              tags={item.tags}
              link={item.links}
              linkTitle={item.linkTitle}
              linkGit={item.linkGit}
              linkGitTitle={item.linkGitTitle}
            />
          );
        })}
      </div>
      </div>
    );
  }
}

export default Workshop;
