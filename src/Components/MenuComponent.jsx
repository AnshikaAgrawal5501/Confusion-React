import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import menu from '../Shared/menu';
import DishDetail from './DishDetailComponent';

function Menu() {

    const [renderDish, renderDishFunction]=React.useState(null);

    function makeDishCard(dish) {
        return <DishDetail dish={dish} />;
    }

    function onDishSelect(dish) {
        const renderDish=makeDishCard(dish);
        renderDishFunction(renderDish);
    }

    function displayDishes(dish) {
        return (
            <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                {menu.dishes.map(displayDishes)}
            </div>
            
            {renderDish}
        </div>
    );
}

export default Menu;