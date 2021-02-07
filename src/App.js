import React from 'react';

import { Route } from 'react-router-dom';

import CountDownContext from './contexts/countDown/countDown.context';

import InitialPage from './pages/initialPage/initialPage.component';
import SignUpPage from './pages/signUp/signUpPage.component';
import LogInPage from './pages/logIn/logInPage.component';
import MainPage from './pages/mainPage/mainPage.component';

import Header from './components/header/header.component';
import ProtectedRoute from './components/protectedRoute/protectedRoute.component';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      defaultTime: -5
    };
  }

  componentDidMount(){

    const date = new Date();
    date.setDate(date.getDate() + 10);

    this.setState({ defaultTime: date.getTime() });
  }

  render() {
    return (
      <>
        <Header />

        <CountDownContext.Provider value={{
          eventDateMillisec: this.state.defaultTime
        }}>
          <Route exact path='/' component={InitialPage}></Route>
        </CountDownContext.Provider>
        <Route path='/signup' component={SignUpPage}></Route>
        <Route path='/login' component={LogInPage}></Route>
        <ProtectedRoute path='/main' component={MainPage}></ProtectedRoute>
      </>
    );
  }
}

export default App;
