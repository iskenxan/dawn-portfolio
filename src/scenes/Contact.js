import React, { Component } from 'react';
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Button,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Col,
  Card,
  CardBody,
  CardHeader,
  Alert,
  Row
} from 'reactstrap';
import { sendForm } from '../utils/API';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSent: false
    };
  }

  onSubmit = (values) => {
    if (!values.prefer) {
      values.prefer = "phone"
    }
    sendForm(values);
    this.setState({ isSent: true})
  }

  renderRadioButtons = (field) => {
    return (
      <div>
        <FormGroup>
            <Label>Preferred way to contact you</Label>
       </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Field
              name="prefer"
              component="input"
              type="radio"
              value="phone"
              checked = {true}
              className="mr-2"
            />
           Phone
         </Label>
         </FormGroup>
         <FormGroup check inline className="mb-4">
           <Label check>
             <Field
               name="prefer"
               component="input"
               type="radio"
               value="email"
               className="mr-2"
             />
            Email
          </Label>
         </FormGroup>
      </div>
    )
  }


  renderInput = (field) => {
    const { label, type, placeholder, name } = field;
    const { touched, error } = field.meta;
    return (
      <FormGroup className="mb-4" row>
        <Col sm={2} >
          <Label>{label}</Label>
        </Col>
        <Col sm={10}>
          <Input
            type={type}
            rows={5}
            name={name}
            placeholder={placeholder}
            {... field.input} />
        </Col>
        <Col xs={12}>
          <FormText color="danger">
            {touched ? error:""}
          </FormText>
        </Col>
      </FormGroup>
    );
  }


  renderForm = () => {
    const { handleSubmit } = this.props;
    return (
      <Card className="mx-4">
        <CardHeader className="text-secondary">email: ashley.gregory8594@gmail.com</CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              label="Name"
              name="name"
              placeholder="your name..."
              type="text"
              component={this.renderInput}/>
            <Field
              label="Email"
              name="email"
              placeholder="your email..."
              type="email"
              component={this.renderInput}/>
            <Field
              label="Phone"
              name="phone"
              placeholder="your phone number..."
              type="number"
              component={this.renderInput}/>
              {this.renderRadioButtons()}
            <Field
              label="Message"
              name="message"
              placeholder="How can I help you?"
              type="textarea"
              component={this.renderInput}/>
             <FormGroup>
               <hr className="w-100"/>
               <Button color="secondary">Submit</Button>
             </FormGroup>
          </Form>
        </CardBody>
      </Card>
    );
  }


  onGalleryButtonClick = () => {
    this.props.history.push("/gallery");
  }


  renderSentMessage = () => {
    return(
      <div>
        <Row>
          <Alert color="info" className="text-center w-75 mx-auto">Thank you! Your form was submitted.</Alert>
        </Row>
        <Row>
          <Button onClick={this.onGalleryButtonClick} className="mx-auto">Back to Gallery</Button>
        </Row>
      </div>
    )
  }


  render() {
    const content = this.state.isSent ? this.renderSentMessage() : this.renderForm();
    const containerClass = this.state.isSent ? "" : "bg-light";
    return (
      <div className={containerClass}>
        <TopMenu />
        <Container className="content-container" fluid>
          {content}
        </Container>
        <Footer />
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = "* Please enter your name";
  }
  if (!values.email) {
    errors.email = "* Please enter your email";
  }
  if (!values.phone) {
    errors.phone = "* Please enter your phone number";
  }
  if (!values.message) {
    errors.message = "* Please enter your message";
  }

  return errors;
}

export default withRouter(reduxForm({
  validate,
  form: 'contact'
})(Contact));
