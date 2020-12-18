import React from 'react';

import { Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import InitialPage from './pages/initialPage/initialPage.component';
import SignUpPage from './pages/signUp/signUpPage.component';
import LogInPage from './pages/logIn/logInPage.component';
import MainPage from './pages/mainPage/mainPage.component';

import Header from './components/header/header.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribe = null;

  componentDidMount(){
    this.unsubscribe = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot  ( (snapshot) =>{
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    return (
      <>
        <Header />
        <Route exact path='/' component={InitialPage}></Route>
        <Route path='/signup' component={SignUpPage}></Route>
        <Route path='/login' component={LogInPage}></Route>
        <Route path='/main' component={MainPage}></Route>
      </>
    );
  }
}

export default App;
