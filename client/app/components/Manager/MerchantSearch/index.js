/**
 *
 * MerchantSearch
 *
 */

import React from 'react';

import SearchBar from '../../Common/SearchBar';

const MerchantSearch = props => {
  return (
    <div className='mb-3'>
      <SearchBar
        name='Comerciante'
        placeholder='Escriba el correo electrónico, el número de teléfono, la marca o el estado'
        btnText='Buscar'
        onSearch={props.onSearch}
        onBlur={props.onBlur}
        onSearchSubmit={props.onSearchSubmit}
      />
    </div>
  );
};

export default MerchantSearch;
