import React from 'react';
import Header from './Components/HeaderComponent';
import Menu from './Components/MenuComponent';
import Contact from './Components/ContactComponent';
import Footer from './Components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/HomeComponent';
import DishDetail from './Components/DishDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import dishes from './Shared/dishes';
import comments from './Shared/comments';
import promotions from './Shared/promotions';
import leaders from './Shared/leaders';

function App() {

    function HomePage() {
        const dish=dishes.filter((dish) => {
          return dish.featured;
        })[0];

        const promotion=promotions.filter((promotion) => {
          return promotion.featured;
        })[0];

        const leader=leaders.filter((leader) => {
          return leader.featured;
        })[0];

        return <Home dish={dish} promotion={promotion} leader={leader} />;
    }

    function MenuPage() {
        return <Menu dishes={dishes} comments={comments} />;
    }

    function ContactPage() {
        return <Contact />;
    }

    function DishWithId({match}) {
        return(
            <DishDetail 
                dish={dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                comment={comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            />
        );
    }

    return (
        <BrowserRouter>
            <Header />
            
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={MenuPage} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={ContactPage} />
                <Redirect to="/home" />
            </Switch>
              
            <Footer />
        </BrowserRouter>
    );
}

export default App;
