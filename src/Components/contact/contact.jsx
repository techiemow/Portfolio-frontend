import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./contact.css"; // Ensure you have this stylesheet for the styles

const ContactForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  // Initial form values
  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // Handle form submission
  const onSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    // Add your form submission logic here (e.g., send data to a server)
    resetForm();
  };

  return (
    <div className="form-card1" id='contact'>
      <div className="form-card2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="form">
              <p className="form-heading">Get In Touch</p>
              
              <div className="form-field">
                <Field
                  name="name"
                  placeholder="Name"
                  className="input-field"
                  type="text"
                />
                <ErrorMessage name="name" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <Field
                  name="email"
                  placeholder="Email"
                  className="input-field"
                  type="email"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <Field
                  name="subject"
                  placeholder="Subject"
                  className="input-field"
                  type="text"
                />
                <ErrorMessage name="subject" component="div" className="error-message" />
              </div>

              <div className="form-field">
                <Field
                  name="message"
                  as="textarea"
                  placeholder="Message"
                  className="input-field"
                  cols="30"
                  rows="3"
                />
                <ErrorMessage name="message" component="div" className="error-message" />
              </div>

              <button className="sendMessage-btn" type="submit">
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
