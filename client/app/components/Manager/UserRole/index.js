/**
 *
 * UserRole
 *
 */

import React from 'react';

import { ROLES } from '../../../constants';
import Badge from '../../Common/Badge';

const UserRole = props => {
  const { className, user } = props;

  return (
    <>
      {user.role === ROLES.Admin ? (
        <Badge variant='primary' className={className}>
          Administrador
        </Badge>
      ) : user.role === ROLES.Merchant ? (
        <Badge variant='dark' className={className}>
          Comerciante
        </Badge>
      ) : (
        <Badge className={className}>Miembro</Badge>
      )}
    </>
  );
};

UserRole.defaultProps = {
  className: ''
};

export default UserRole;
