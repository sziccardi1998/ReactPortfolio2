import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage.js";
import Contact from "./pages/Contact/Contact.js";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio Page"){
        return <PortfolioPage />;
    } else {
      return <Contact />;
    }
  };

  render() {

    return (
      <div>
        <Nav
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;