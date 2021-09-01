import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

function DishDetail(props) {

    function makeList(comment) {
        return (
            <li className="my-4" key={comment.id}>
                {comment.comment}
                <br /><br />
                -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </li>
        );
    }

    function generateComments() {
        return (
            <div  className="col-12 col-md-5 m-1">
                <h1>Comments</h1>

                <ul className="list-unstyled">
                    {props.comment.map(makeList)}
                </ul>
            </div>
        );
    }

    return (
        <div className="container">

            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>

            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>

            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                {generateComments()}
                
            </div>
        </div>
    );
}


export default DishDetail;