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
import { actions } from 'react-redux-form';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreater';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => dispatch(fetchDishes()),
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (firstname, lastname, tenum, email, agree, contactType, message) => dispatch(postFeedback(firstname, lastname, tenum, email, agree, contactType, message)),
});

function Main(props) {

  React.useEffect(function() {

    props.fetchDishes();
    props.fetchComments();
    props.fetchPromos();
    props.fetchLeaders();
  },[]);

    function HomePage() {
        const dish=props.dishes.dishes.filter((dish) => {
          return dish.featured;
        })[0];

        const promotion=props.promotions.promotions.filter((promotion) => {
          return promotion.featured;
        })[0];

        const leader=props.leaders.leaders.filter((leader) => {
          return leader.featured;
        })[0];

        return <Home 
            dish={dish} 
            dishesLoading={props.dishes.isLoading}
            dishesErrMess={props.dishes.errMess} 
            promotion={promotion}
            promoLoading={props.promotions.isLoading}
            promoErrMess={props.promotions.errMess}
            leader={leader}  
            leaderLoading={props.leaders.isLoading}
            leaderErrMess={props.leaders.errMess}           
        />;
    }

    function AboutPage() {
        return <About leaders={props.leaders} />;
    }

    function MenuPage() {
        return <Menu dishes={props.dishes} comments={props.comments} />;
    }

    function ContactPage() {
        return <Contact 
            resetFeedbackForm={props.resetFeedbackForm} 
            postFeedback={props.postFeedback}
        />;
    }

    function DishWithId({match}) {
        return(
            <DishDetail 
                dish={props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                dishes={props.dishes} 
                comment={props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                postComment={props.postComment} 
                commentsErrMess={props.comments.errMess}
            />
        );
    }

    return (   
        <TransitionGroup>
            <CSSTransition key={props.location.key} classNames="page" timeout={300}>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={AboutPage} />
                    <Route exact path='/menu' component={MenuPage} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={ContactPage} />
                    <Redirect to="/home" />
                </Switch>
            </CSSTransition> 
        </TransitionGroup>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));;
