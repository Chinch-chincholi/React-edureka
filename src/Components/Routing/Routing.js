import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Service from "./Service";
import About from "./About";
import Post from './Form';
import PostDetails from './PostDetails';

class Routing extends React.Component {
    render() {
        const linkStyle = {
            link: {
                textDecoration: 'none',
                padding: '10px'
            }
        }
        return (
            <>
                <BrowserRouter>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="link" style={linkStyle.link} to="/">Home</Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="link" style={linkStyle.link} to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link" style={linkStyle.link} to="/details">Details</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link" style={linkStyle.link} to="/service">Service</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="link" style={linkStyle.link} to="/post">Post</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/details" element={<Details />}></Route>
                        <Route path="/service" element={<Service />}></Route>
                        <Route path="/post" element={<Post />}></Route>
                        <Route path="/posts/:id" element={<PostDetails/>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
}

export default Routing;
