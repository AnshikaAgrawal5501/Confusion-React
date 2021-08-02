import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

function DishDetail(props) {

    function makeList(comment) {
        return (
            <li className="my-4" key={comment.id}>
                {comment.comment}
                <br /><br />
                -- {comment.author} , {comment.date}
            </li>
        );
    }

    function generateComments() {
        return (
            <div  className="col-12 col-md-5 m-1">
                <h1>Comments</h1>

                <ul className="list-unstyled">
                    {props.dish.comments.map(makeList)}
                </ul>
            </div>
        );
    }

    return (
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
    );
}


export default DishDetail;