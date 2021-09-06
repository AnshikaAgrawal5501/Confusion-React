import React from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
// import dishes from './Shared/dishes';
// import comments from './Shared/comments';
// import promotions from './Shared/promotions';
// import leaders from './Shared/leaders';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

function Main(props) {

    function HomePage() {
        const dish=props.dishes.filter((dish) => {
          return dish.featured;
        })[0];

        const promotion=props.promotions.filter((promotion) => {
          return promotion.featured;
        })[0];

        const leader=props.leaders.filter((leader) => {
          return leader.featured;
        })[0];

        return <Home dish={dish} promotion={promotion} leader={leader} />;
    }

    function AboutPage() {
        return <About leaders={props.leaders} />;
    }

    function MenuPage() {
        return <Menu dishes={props.dishes} comments={props.comments} />;
    }

    function ContactPage() {
        return <Contact />;
    }

    function DishWithId({match}) {
        return(
            <DishDetail 
                dish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                comment={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            />
        );
    }

    return (    
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/aboutus' component={AboutPage} />
            <Route exact path='/menu' component={MenuPage} />
            <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/contactus' component={ContactPage} />
            <Redirect to="/home" />
        </Switch>
    );
}

export default withRouter(connect(mapStateToProps)(Main));;
