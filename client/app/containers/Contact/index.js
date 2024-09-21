/*
 *
 * Contact
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';

import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class Contact extends React.PureComponent {
  render() {
    const { contactFormData, contactFormChange, contactUs, formErrors } =
      this.props;

    const handleSubmit = event => {
      event.preventDefault();
      contactUs();
    };

    return (
      <div className='contact'>
        <h3 className='text-uppercase'>Información de Contacto</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['name']}
                label={'Name'}
                name={'name'}
                placeholder={'Lebassi'}
                value={contactFormData.name}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='6'>
              <Input
                type={'text'}
                error={formErrors['email']}
                label={'Email'}
                name={'email'}
                placeholder={'isabelchalco60@gmail.com'}
                value={contactFormData.email}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
            <Col xs='12' md='12'>
              <Input
                type={'textarea'}
                error={formErrors['message']}
                label={'Message'}
                name={'message'}
                placeholder={'Lebasso es una empresa de moda Lojana, buscamos crear los mejores outfits en tendencia y a precios accesibles'}
                value={contactFormData.message}
                onInputChange={(name, value) => {
                  contactFormChange(name, value);
                }}
              />
            </Col>
          </Row>
          <hr />
          <div className='contact-actions'>
            <Button type='submit' text='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contactFormData: state.contact.contactFormData,
    formErrors: state.contact.formErrors
  };
};

export default connect(mapStateToProps, actions)(Contact);
