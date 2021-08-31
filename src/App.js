import React from 'react';
import Header from './Components/HeaderComponent';
import Menu from './Components/MenuComponent';
import Footer from './Components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {

  function HomePage() {
    return <Home />;
  }

  function MenuPage() {
    return <Menu />;
  }

  return (
      <BrowserRouter>
          <Header />
          
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={MenuPage} />
              <Redirect to="/home" />
          </Switch>
            
          <Footer />
      </BrowserRouter>
    );
}

export default App;
