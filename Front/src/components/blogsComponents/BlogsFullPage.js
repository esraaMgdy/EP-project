import React, { Component } from "react";
import Navbar from './../sharedComponents/Navbar';
import Header from "./Header";
import Blogs from './Blogs';
import Footer from './../sharedComponents/Footer';
class BlogsFullPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <Blogs />
        <Footer />
      </React.Fragment>
    );
  }
}

export default BlogsFullPage;
