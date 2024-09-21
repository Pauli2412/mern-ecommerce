/*
 *
 * MerchantSignup
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import Input from '../../components/Common/Input';
import Button from '../../components/Common/Button';

class RegistroComerciante extends React.PureComponent {
  componentDidMount() {
    const email = this.props.location.search.split('=')[1];
    this.props.merchantSignupChange('email', email);
  }

  render() {
    const {
      signupFormData,
      formErrors,
      merchantSignupChange,
      merchantSignUp
    } = this.props;

    const handleSubmit = event => {
      const token = this.props.match.params.token;
      event.preventDefault();

      merchantSignUp(token);
    };

    return (
      <div className='merchant-signup-form'>
        <form onSubmit={handleSubmit} noValidate>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 6, offset: 3 }} className='p-0'>
              <Col xs='12' md='12'>
                <h2 className='text-center'>Completa el Registro</h2>
                <hr />
              </Col>

              <Col xs='12' md='12'>
                <Input
                  type={'text'}
                  error={formErrors['email']}
                  label={'Dirección de correo electrónico'}
                  name={'email'}
                  placeholder={'Por favor ingresa tu correo electrónico'}
                  value={signupFormData.email}
                  onInputChange={(name, value) => {
                    merchantSignupChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Input
                  type={'text'}
                  error={formErrors['firstName']}
                  label={'Nombre'}
                  name={'firstName'}
                  placeholder={'Por favor ingresa tu nombre'}
                  value={signupFormData.firstName}
                  onInputChange={(name, value) => {
                    merchantSignupChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Input
                  type={'text'}
                  error={formErrors['lastName']}
                  label={'Apellido'}
                  name={'lastName'}
                  placeholder={'Por favor ingresa tu apellido'}
                  value={signupFormData.lastName}
                  onInputChange={(name, value) => {
                    merchantSignupChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Input
                  type={'password'}
                  label={'Contraseña'}
                  error={formErrors['password']}
                  name={'password'}
                  placeholder={'Por favor ingresa tu contraseña'}
                  value={signupFormData.password}
                  onInputChange={(name, value) => {
                    merchantSignupChange(name, value);
                  }}
                />
              </Col>
              <Col xs='12' md='12'>
                <Button
                  className='mt-3'
                  type='submit'
                  variant='primary'
                  text='Comenzar'
                />
              </Col>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    signupFormData: state.merchant.signupFormData,
    formErrors: state.merchant.signupFormErrors
  };
};

export default connect(mapStateToProps, actions)(RegistroComerciante);

