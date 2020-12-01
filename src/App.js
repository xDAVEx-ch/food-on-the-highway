import { Route } from 'react-router-dom';

import InitialPage from './pages/initialPage/initialPage.component';
import SignUpPage from './pages/signUp/signUpPage.component';
import LogInPage from './pages/logIn/logInPage.component';
import MainPage from './pages/mainPage/mainPage.component';

import Header from './components/header/header.component';

function App() {
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

export default App;
