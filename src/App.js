import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Blogs from './components/Blogs';
import Accomplishments from './components/Accomplishments';
import Aboutme from './components/Aboutme';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home" render={() => <Home />} />
        <Route exact path="/Aboutme" render={() => <Aboutme />} />
        <Route exact path="/Accomplishments" render={() => <Accomplishments />} />
        <Route exact path="/Projects" render={() => <Projects/>} />
        <Route exact path="/Certifications" render={() => <Certifications />} />
        <Route exact path="/Connect" render={() => <Connect/>} />
        <Route exact path="/Blogs" render={() => <Blogs/>} />
        <Redirect to="/Home" />
      </Switch>
    </Router>
  );
};

export default App;
