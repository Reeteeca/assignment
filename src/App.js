import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import QuestionPage1 from './pages/QuestionPage1';
import QuestionPage2 from './pages/QuestionPage2';
import QuestionPage3 from './pages/QuestionPage3';
import QuestionPage4 from './pages/QuestionPage4';
import QuestionPage5 from './pages/QuestionPage5';
import SubmissionPage from './pages/SubmissionPage';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/question1" component={QuestionPage1} />
        <Route path="/question2" component={QuestionPage2} />
        <Route path="/question3" component={QuestionPage3} />
        <Route path="/question4" component={QuestionPage4} />
        <Route path="/question5" component={QuestionPage5} />
        <Route path="/submit" component={SubmissionPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
