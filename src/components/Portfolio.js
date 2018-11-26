import React, { Component } from "react";
import PortfolioItem from "./partials/PortfolioItem";

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="portfolio__content">
          <h1>Portfolio</h1>
          <PortfolioItem
            text="Highly customised, multilanguage Magento eCommerce website"
            image="img/missguided.jpg"
            tags="Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing"
            link="https://missguided.co.uk"
            linkTitle="Missguided"
          />
          <PortfolioItem
            text="Highly customised, multilanguage Magento eCommerce website"
            image="img/mennace.jpg"
            tags="Magento, Frontend Development, HTML5, Sass, Javascript, JSON, AJAX, RESTful API, A/B testing"
            link="https://mennace.com/uk"
            linkTitle="Mennace"
          />
          <PortfolioItem
            text="Responsive website based on Wordpress and developed from scratch"
            image="img/aqua-pura-portfolio.jpg"
            tags="Wordpress, Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, WebGL, RESTful API"
            link="http://aqua-pura.com"
            linkTitle="Aqua Pura UK"
          />
          <PortfolioItem
            text="Responsive website made on top of Umbraco cms."
            image="img/belling-portfolio.jpg"
            tags="Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX"
            link="http://www.belling.co.uk"
            linkTitle="Belling UK"
          />
          <PortfolioItem
            text="Responsive single page website built from scratch"
            image="img/tankard-portfolio.jpg"
            tags="Frontend Development, HTML5, Sass, CSS animations, Javascript"
            link="http://www.thelanterntankard.com"
            linkTitle="The Lantern Tankard"
          />
          <PortfolioItem
            text="Magento Enterprise eCommerce Website built for the USA branch of BrandyMelville. An High street fashion brand"
            image="img/bmusa-portfolio.jpg"
            tags="Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API"
            link="http://www.brandymelvilleusa.com"
            linkTitle="Brandy Melville USA"
          />
          <PortfolioItem
            text="Responsive website made on top of Umbraco cms."
            image="img/stoves-portfolio.jpg"
            tags="Frontend Development, HTML5, Sass, Javascript, jQuery, JSON, AJAX, GoogleMaps API"
            link="http://www.stoves.co.uk"
            linkTitle="Stoves UK"
          />
          <PortfolioItem
            text="Responsive website built for a Bed&amp;Breakfast in Venice using HTML5, Sass, jQuery, and PHP for the online booking."
            image="img/bbvenezia-portfolio.jpg"
            tags="Graphic Design, Full Stack Development, PHP, Sass, CSS3, Javascript, RESTful API"
            link="http://www.bbvenezia.com"
            linkTitle="B&amp;B Venezia"
          />
          <PortfolioItem
            text="Magento Enterprise eCommerce Website built for the UK branch of BrandyMelville. An High street fashion brand"
            image="img/bmuk-portfolio.jpg"
            tags="Graphic Design, Full Stack Development, Magento, Sass, Javascript, JSON, AJAX, RESTful API"
            link="http://www.brandymelville.co.uk"
            linkTitle="Brandy Melville UK"
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
