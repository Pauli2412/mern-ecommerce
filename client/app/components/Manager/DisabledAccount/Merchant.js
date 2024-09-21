/*
 *
 * DisabledMerchantAccount
 *
 */

import React from 'react';

const DisabledMerchantAccount = props => {
  const { user } = props;

  return (
    <div
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ minHeight: 250 }}
    >
      <h3 className='mb-3'>Hola, {user.firstName}</h3>
      <div className='p-4 rounded-sm bg-secondary'>
        <h5>Lamentablemente parece que su cuenta ha sido deshabilitada.</h5>
        <p className='text-gray mb-1'>
          Comuníquese con el administrador para solicitar acceso nuevamente.
        </p>
        <div className='mt-2'>
          <i className='fa fa-phone mr-2' />
          <span>Llamanos al +593 98 807 2618</span>
        </div>
      </div>
    </div>
  );
};

export default DisabledMerchantAccount;
