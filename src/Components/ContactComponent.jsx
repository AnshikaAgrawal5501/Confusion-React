import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions } from 'react-redux-form';

function Contact(props) {

    // const [info, setInfo]=React.useState({
    //     firstname: '',
    //     lastname: '',
    //     telnum: '',
    //     email: '',
    //     agree: false,
    //     contactType: 'Tel.',
    //     message: '',
    //     touched: {
    //         firstname: false,
    //         lastname: false,
    //         telnum: false,
    //         email: false
    //     }
    // });

    // function handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     setInfo(prevValue => {
    //         return {
    //             ...prevValue,
    //             [name]: value
    //         };
    //     });
    // }

    function handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        props.resetFeedbackForm();
        // event.preventDefault();
    }

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => val && !isNaN(Number(val)) && val.length===10;
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

    // function handleBlur(field) {
    //     setInfo(prevValue => {
    //         return {
    //             ...prevValue,
    //             touched: {...prevValue, [field]:true}
    //         };
    //     });
    // }

    // function validate (firstname, lastname, telnum, email) {
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };

    //     if (info.touched.firstname && firstname.length < 3)
    //         errors.firstname = 'First Name should be >= 3 characters';
    //     else if (info.touched.firstname && firstname.length > 10)
    //         errors.firstname = 'First Name should be <= 10 characters';

    //     if (info.touched.lastname && lastname.length < 3)
    //         errors.lastname = 'Last Name should be >= 3 characters';
    //     else if (info.touched.lastname && lastname.length > 10)
    //         errors.lastname = 'Last Name should be <= 10 characters';

    //     const reg = /^\d+$/;
    //     if (info.touched.telnum && !reg.test(telnum))
    //         errors.telnum = 'Tel. Number should contain only numbers';
    //     else if (info.touched.telnum && (telnum.length<10 || telnum.length>10))
    //         errors.telnum = 'Tel. Number should be of 10 digits';

    //     if(info.touched.email && email.split('').filter(x => x === '@').length !== 1)
    //         errors.email = 'Email should contain a @';

    //     return errors;
    // }

    // const errors = validate(info.firstname, info.lastname, info.telnum, info.email);

    return(
        <div className="container">

            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
                
            <div className="col-12">
                <h3>Contact Us</h3>
                <hr />
            </div>

            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fab fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="far fa-envelope"></i> Email</a>
                    </div>
                </div>
            </div>

            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>

                <div className="col-12 col-md-9">
                    
                    <Form model="feedback" onSubmit={(values) => handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                 />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be greater than 2 characters. ',
                                        maxLength: 'Must be 15 characters or less.'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Control.text model=".lastname" id="lastname" name="lastname"
                                    placeholder="Last Name"
                                    className="form-control"
                                    validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }}
                                 />
                                <Errors
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                        required: 'Required. ',
                                        minLength: 'Must be greater than 2 characters. ',
                                        maxLength: 'Must be 15 characters or less.'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                                <Control.text model=".telnum" id="telnum" name="telnum"
                                    placeholder="Tel. Number"
                                    className="form-control"
                                    validators={{ required, isNumber }}
                                 />
                                <Errors
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required: 'Required. ',
                                        isNumber: 'Must be a number of 10 digits.'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    validators={{ required, validEmail }}
                                 />
                                <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required. ',
                                        validEmail: 'Invalid Email Address.'
                                    }}
                                 />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 6, offset: 2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" name="agree"
                                            className="form-check-input" /> {' '}
                                            <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Control.select model=".contactType" name="contactType"
                                    className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="12"
                                    className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size:10, offset: 2}}>
                                <Button type="submit" color="primary">
                                Send Feedback
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;