/**
 *
 * MerchantList
 *
 */

import React from 'react';

import { MERCHANT_STATUS } from '../../../constants';
import { formatDate } from '../../../utils/date';
import Button from '../../Common/Button';
import { CheckIcon, XIcon, RefreshIcon, TrashIcon } from '../../Common/Icon';

const MerchantList = props => {
  const {
    merchants,
    approveMerchant,
    rejectMerchant,
    deleteMerchant,
    disableMerchant
  } = props;

  const renderMerchantPopover = merchant => (
    <div className='p-2'>
      <p className='text-gray text-14'>
        {merchant.isActive
          ? 'Al desactivar la cuenta de vendedor se desactivará la marca del vendedor y el acceso a la cuenta.'
          : 'Al habilitar la cuenta del comerciante se restablecerá el acceso a la cuenta del comerciante.'}
      </p>
      <Button
        variant='dark'
        size='sm'
        className='w-100'
        text={merchant.isActive ? 'Desactivar Converciante' : 'Activar Converciante'}
        onClick={() => disableMerchant(merchant, !merchant.isActive)}
      />
    </div>
  );

  return (
    <div className='merchant-list'>
      {merchants.map((merchant, index) => (
        <div key={index} className='merchant-box'>
          <div className='mb-3 p-4'>
            <label className='text-black'>Negocio</label>
            <p className='fw-medium text-truncate'>{merchant.business}</p>
            <label className='text-black'>Marca</label>
            <p className='text-truncate'>{merchant.brandName}</p>
            <label className='text-black'>Nombre</label>
            <p className='text-truncate'>{merchant.name}</p>
            <label className='text-black'>Correo Electrónico</label>
            <p className='text-truncate'>
              {merchant.email ? merchant.email : 'N/A'}
            </p>
            <label className='text-black'>Número de Teléfono</label>
            <p>{merchant.phoneNumber}</p>
            <label className='text-black'>Fecha de Solicitud</label>
            <p>{formatDate(merchant.created)}</p>


            <hr />

            {merchant.status === MERCHANT_STATUS.Approved ? (
              <>
                <div className='d-flex flex-row justify-content-between align-items-center mx-0'>
                  <div className='d-flex flex-row mx-0'>
                    <CheckIcon className='text-green' />
                    <p className='ml-2 mb-0'>Aprovado</p>
                  </div>

                  <div className='d-flex flex-row align-items-center mx-0'>
                    <Button
                      className='ml-3'
                      size='lg'
                      round={20}
                      icon={<TrashIcon width={20} />}
                      tooltip={true}
                      tooltipContent='Delete'
                      id={`delete-${merchant._id}`}
                      onClick={() => deleteMerchant(merchant)}
                    />
                  </div>
                </div>
                <Button
                  className='w-100 mt-3'
                  size='sm'
                  text={
                    merchant.isActive ? 'Desactivar Converciante' : 'Activar Converciante'
                  }
                  popover={true}
                  popoverTitle={`Are you sure you want to ${merchant.isActive ? 'disable' : 'enable'
                    } ${merchant.name}' cuenta comercial?`}
                  popoverContent={renderMerchantPopover(merchant)}
                />
              </>
            ) : merchant.status === MERCHANT_STATUS.Rejected ? (
              <>
                <div className='d-flex flex-row justify-content-between align-items-center mx-0'>
                  <Button
                    size='lg'
                    round={20}
                    icon={<RefreshIcon width={18} className='text-primary' />}
                    tooltip={true}
                    tooltipContent='Re-Approve'
                    id={`re-approve-${merchant._id}`}
                    onClick={() => approveMerchant(merchant)}
                  />
                  <div className='d-flex flex-row align-items-center mx-0'>
                    <Button
                      className='ml-3'
                      size='lg'
                      round={20}
                      icon={<TrashIcon width={20} />}
                      tooltip={true}
                      tooltipContent='Delete'
                      id={`delete-${merchant._id}`}
                      onClick={() => deleteMerchant(merchant)}
                    />
                  </div>
                </div>
              </>
            ) : merchant.email ? (
              <div className='d-flex flex-row justify-content-between align-items-center mx-0'>
                <div className='d-flex flex-row mx-0'>
                  <Button
                    size='lg'
                    round={20}
                    icon={<CheckIcon width={18} className='text-green' />}
                    tooltip={true}
                    tooltipContent='Approve'
                    id={`approve-${merchant._id}`}
                    onClick={() => approveMerchant(merchant)}
                  />
                  <Button
                    className='ml-2'
                    size='lg'
                    round={20}
                    icon={<XIcon width={20} />}
                    tooltip={true}
                    tooltipContent='Rechazar'
                    id={`reject-${merchant._id}`}
                    onClick={() => rejectMerchant(merchant)}
                  />
                </div>
                <div className='d-flex flex-row align-items-center mx-0'>
                  <Button
                    className='ml-3'
                    size='lg'
                    round={20}
                    icon={<TrashIcon width={20} />}
                    tooltip={true}
                    tooltipContent='Borrar'
                    id={`delete-${merchant._id}`}
                    onClick={() => deleteMerchant(merchant)}
                  />
                </div>
              </div>
            ) : (
              <>
                <p className='text-truncate'>
                  El comerciante no tiene correo electrónico. Llame al
                  <a
                    href={`tel:${merchant.phoneNumber}`}
                    className='text-primary'
                  >
                    {' '}
                    {merchant.phoneNumber}
                  </a>
                </p>
                <Button
                  size='lg'
                  round={20}
                  icon={<TrashIcon width={20} />}
                  tooltip={true}
                  tooltipContent='Delete'
                  id={`delete-${merchant._id}`}
                  onClick={() => deleteMerchant(merchant)}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MerchantList;
