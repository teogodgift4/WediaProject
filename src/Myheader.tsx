import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Mynavigation from './Mynavigation'
import Mytitle from './Mytitle'
import Features from './Features';
import Latest from './Latest';
import Media from './Media';
import Stories from './Stories';


export default function Myheader() {
    return (
        <div className="myheader">
            <Mynavigation/>
            <Mytitle/>
            <div className="mytabs">
            <Router>
            <div className="mytabls_menu">
              <Link to="/Features"><h2>Features</h2></Link>
              <Link to="/Latest"><h2>Latest</h2></Link>
              <Link to="/Media"> <h2>In the Media Stories</h2></Link>
              <Link to="/Stories"><h2>Stories</h2></Link>
              </div>
              <Switch>
          <Route exact path="/">
            <Features />
          </Route>
          <Route exact path="/Features">
            <Features />
          </Route>
          <Route path="/Latest">
            <Latest />
          </Route>
          <Route exact path="/Media">
            <Media />
          </Route>
          <Route path="/Stories">
            <Stories />
          </Route>
            </Switch>
        </Router>
            </div>
        </div>
    )
}
