import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Link } from 'react-router-dom';
import Loading from './LoadingComponent';

function Menu(props) {

    const [renderDish, renderDishFunction]=React.useState(null);

    function makeDishCard(dish) {

        const comment=props.comments.filter((comment) => { 
                return comment.dishId===dish.id
            });

        return <DishDetail dish={dish} comment={comment} />;
    }

    function onDishSelect(dish) {
        const renderDish=makeDishCard(dish);
        renderDishFunction(renderDish);
    }

    function displayDishes(dish) {
        return (
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <Link to={`./menu/${dish.id}`} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                </Card>
            </div>
        );
    }

    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    } else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } else {

        return (
            <div className="container">

                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                        
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>

                <div className="row">
                    {props.dishes.dishes.map(displayDishes)}
                </div>
                
                {renderDish}
            </div>
        );
    }
}

export default Menu;