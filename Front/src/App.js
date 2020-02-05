import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import HomeMainCard from "./components/homeComponents/HomeMainCard";
import HomeCourses from "./components/homeComponents/HomeCourses";
import DoTest from "./components/homeComponents/DoTest";
import CoursesPage from "./components/coursesComponents/CoursesPage";
import BlogsFullPage from './components/blogsComponents/BlogsFullPage';
import QuestionsFullPage from './components/questionsPageComponents/QuestionsFullPage';
import Aboutus from "./components/aboutComponents/Aboutus";
import Joinus from "./components/joinUsComponents/Joinus";
import Contact from "./components/contactComponents/Contact";
import AboutFullPage from "./components/aboutComponents/AboutFullPage";
import ProfileFullPage from './components/ProfileComponents/ProfileFullPage';
import LogIn from './components/LogInAndSignUp/LogIn';
import SignUp from './components/LogInAndSignUp/SignUP';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/*Home slider routes*/}
        <Route exact path="/" component={HomeMainCard} />
        <Route exact path="/view/courses" component={HomeCourses} />
        <Route exact path="/do-test" component={DoTest} />

        <Route exact path="/courses-page" component={CoursesPage} />

        <Route exact path="/aboutUs-1" component={Aboutus} />
        <Route exact path="/aboutUs-2" component={AboutFullPage} />
        <Route exact path="/blogs" component={BlogsFullPage} />
        <Route exact path="/questions-page" component={QuestionsFullPage} />

        <Route exact path="/contactUs" component={Contact} />
        <Route exact path="/join-us" component={Joinus} />
        <Route exact path="/profile" component={ProfileFullPage} />
        <Route exact path="/logIn" component={LogIn} />
        <Route exact path="/signUp" component={SignUp} />

      </BrowserRouter>
    );
  }
}
