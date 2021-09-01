import React from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {

    const [info, setInfo]=React.useState({
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: '',
        touched: {
            firstname: false,
            lastname: false,
            telnum: false,
            email: false
        }
    });

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setInfo(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(info));
        alert('Current State is: ' + JSON.stringify(info));
        event.preventDefault();
    }

    function handleBlur(field) {
        setInfo(prevValue => {
            return {
                ...prevValue,
                touched: {...prevValue, [field]:true}
            };
        });
    }

    function validate (firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (info.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (info.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (info.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (info.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (info.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';
        else if (info.touched.telnum && (telnum.length<10 || telnum.length>10))
            errors.telnum = 'Tel. Number should be of 10 digits';

        if(info.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    const errors = validate(info.firstname, info.lastname, info.telnum, info.email);

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
                    <Form onSubmit={handleSubmit}>

                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstname" name="firstname"
                                    placeholder="First Name"
                                    value={info.firstname}
                                    valid={errors.firstname === ''}
                                    invalid={errors.firstname !== ''}
                                    onBlur={() => handleBlur('firstname')}
                                    onChange={handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name="lastname"
                                    placeholder="Last Name"
                                    value={info.lastname}
                                    valid={errors.lastname === ''}
                                    invalid={errors.lastname !== ''}
                                    onBlur={() => handleBlur('lastname')}
                                    onChange={handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>                        
                        </FormGroup>

                        <FormGroup row>
                        <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                                <Input type="tel" id="telnum" name="telnum"
                                    placeholder="Tel. number"
                                    value={info.telnum}
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onBlur={() => handleBlur('telnum')}
                                    onChange={handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={info.email}
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onBlur={() => handleBlur('email')}
                                    onChange={handleInputChange} />
                                    <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"
                                            name="agree"
                                            checked={info.agree}
                                            onChange={handleInputChange} /> {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>

                            <Col md={{size: 3, offset: 1}}>
                                <Input type="select" name="contactType"
                                        value={info.contactType}
                                        onChange={handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message"
                                    rows="12"
                                    value={info.message}
                                    onChange={handleInputChange}></Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;