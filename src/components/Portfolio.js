import React, { Component } from "react";
import PortfolioItem from "./partials/PortfolioItem";
import missguided from '../img/missguided-portfolio.jpg';
import mennace from '../img/mennace-portfolio.jpg';
import aquapura from '../img/aqua-pura-portfolio.jpg';
import belling from '../img/belling-portfolio.jpg';
import tankard from '../img/tankard-portfolio.jpg';
import bmusa from '../img/bmusa-portfolio.jpg';
import stoves from '../img/stoves-portfolio.jpg';
import bbvenezia from '../img/bbvenezia-portfolio.jpg';
import bmuk from '../img/bmuk-portfolio.jpg';

const PortfolioItems = [
  {
      text: "Highly customised, multilanguage Magento eCommerce website",
      image: missguided,
      tags: "Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing",
      link: "https://missguided.co.uk",
      linkTitle: "Missguided"
  },
  {
      text: "Highly customised, multilanguage Magento eCommerce website",
      image: mennace,
      tags: "Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing",
      link: "https://mennace.com/uk",
      linkTitle: "Mennace"
  },
  {
      text: "Responsive website based on Wordpress and developed from scratch",
      image: aquapura,
      tags: "Wordpress, Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, WebGL, RESTful API",
      link: "https://aqua-pura.com",
      linkTitle: "Aqua Pura UK"
  },
  {
      text: "Responsive website made on top of Umbraco cms.",
      image: belling,
      tags: "Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX",
      link: "http://www.belling.co.uk",
      linkTitle: "Belling UK"
  },
  {
      text: "Responsive single page website built from scratch",
      image: tankard,
      tags: "Frontend Development, HTML5, Sass, CSS animations, Javascript",
      link: "http://www.thelanterntankard.com",
      linkTitle: "The Lantern Tankard"
  },
  {
      text: "Magento Enterprise eCommerce Website built for the USA branch of BrandyMelville. An High street fashion brand",
      image: bmusa,
      tags: "Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API",
      link: "http://www.brandymelvilleusa.com",
      linkTitle: "Brandy Melville USA"
  },
  {
      text: "Responsive website made on top of Umbraco cms.",
      image: stoves,
      tags: "Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, GoogleMaps API",
      link: "http://www.stoves.co.uk",
      linkTitle: "Stoves UK"
  },
  {
      text: "Responsive website built for a Bed&amp;Breakfast in Venice using HTML5, Sass, jQuery, and PHP for the online booking.",
      image: bbvenezia,
      tags: "Graphic Design, Full Stack Development, PHP, Sass, CSS3, Javascript, RESTful API",
      link: "http://www.bbvenezia.com",
      linkTitle: "B&amp;B Venezia"
  },
  {
      text: "Magento Enterprise eCommerce Website built for the UK branch of BrandyMelville. An High street fashion brand",
      image: bmuk,
      tags: "Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API",
      link: "http://www.brandymelville.co.uk",
      linkTitle: "Brandy Melville UK"
  }
]
class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__content">
          <h1>Portfolio</h1>
          {PortfolioItems.map( item => {
            return (
              <PortfolioItem {...item} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;
