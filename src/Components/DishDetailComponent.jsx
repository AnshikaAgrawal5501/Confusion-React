import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, FormGroup, Col, Label, Modal, ModalHeader, ModalBody,} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

function DishDetail(props) {

    const [isModalOpen, modalFunc]=React.useState(false);

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    function toggleModal() {
        modalFunc(!isModalOpen);
    }

    function submitComment(values) {
        toggleModal();
        props.addComment(props.dish.id, values.rating, values.author, values.comment);
        alert('Current State is: ' + JSON.stringify(values));
    }

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

                <Button outline color="secondary" onClick={toggleModal}><span><i className="fas fa-pencil-alt"></i></span> Submit Comment</Button>
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

                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                    <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={(values) => submitComment(values)}>

                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                    />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be greater than 2 characters. ',
                                        maxLength: 'Must be 15 characters or less.'
                                    }}
                                />
                            </FormGroup>
                            
                            <FormGroup>
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control" 
                                />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                
                    </ModalBody>
                </Modal>
                
            </div>
        </div>
    );
}


export default DishDetail;