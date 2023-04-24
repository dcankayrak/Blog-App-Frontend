import React, { Component } from 'react';
import { Route,Routes } from 'react-router-dom';
import Navi from '../Navbar/Navi';
import Showcase from '../Showcase/Showcase';
import BlogList from '../BlogList/BlogList';
import BlogPost from '../BlogPost/BlogPost';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navi />
                <Showcase />
                <Routes>
                    <Route exact path='/' element={<BlogList />} />
                    <Route exact path= '/:id' element={<BlogPost />} />
                </Routes>
                <AboutMe />
                <Footer />
            </div>
        )
    }
}
