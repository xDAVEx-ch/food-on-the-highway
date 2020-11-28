import { Route } from 'react-router-dom';

import InitialPage from './pages/initialPage/initialPage.component';
import SignUpPage from './pages/signUp/signUpPage.component';
import LogInPage from './pages/logIn/logInPage.component';

import Header from './components/header/header.component';

function App() {
  return (
    <>
      <Header />
      <Route exact path='/' component={InitialPage}></Route>
      <Route path='/signup' component={SignUpPage}></Route>
      <Route path='/login' component={LogInPage}></Route>
    </>
  );
}

export default App;
