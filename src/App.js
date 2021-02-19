import React from "react";
//import "./style.css";
import {Grid,Paper,Button} from '@material-ui/core'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Main from'./survey/'
import CreateSurvey from './survey/CreateSurvey'
import TakeSurvey from './survey/TakeSurvey'
import Publish from './survey/Publish'
export default function App() {
  return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/take" component={TakeSurvey}></Route>
            <Route exact path="/create" component={CreateSurvey}></Route>
            <Route exact path="/publish" component={Publish}></Route>
          </Switch>
        </Router>
      </>
  );
}