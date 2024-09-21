/**
 *
 * OrderSummary
 *
 */

import React from 'react';

import { Col } from 'reactstrap';

const OrderSummary = props => {
  const { order } = props;

  return (
    <Col className='order-summary pt-3'>
      <h2>Resumen de su Pedido</h2>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Subtotal</p>
        <p className='summary-value ml-auto'>${order.total}</p>
      </div>
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>IVA</p>
        <p className='summary-value ml-auto'>${order.totalTax}</p>
      </div>

      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Envio y Empaquetado</p>
        <p className='summary-value ml-auto'>$4</p>
      </div>

      <hr />
      <div className='d-flex align-items-center summary-item'>
        <p className='summary-label'>Total</p>
        <p className='summary-value ml-auto'>${order.totalWithTax}</p>
      </div>
    </Col>
  );
};

export default OrderSummary;
