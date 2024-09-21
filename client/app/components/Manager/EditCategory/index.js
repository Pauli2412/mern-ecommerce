/**
 *
 * EditCategory
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import Input from '../../Common/Input';
import Button from '../../Common/Button';
import SelectOption from '../../Common/SelectOption';
import Switch from '../../Common/Switch';

const EditCategory = props => {
  const {
    products,
    category,
    categoryChange,
    formErrors,
    updateCategory,
    deleteCategory,
    activateCategory
  } = props;

  const handleSubmit = event => {
    event.preventDefault();
    updateCategory();
  };

  return (
    <div className='edit-category'>
      <div className='d-flex flex-row mx-0 mb-3'>
        <label className='mr-1'>Categoria </label>
        <Link to={`/shop/category/${category.slug}`} className='default-link'>
          {category.slug}
        </Link>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['name']}
              label={'Name'}
              name={'name'}
              placeholder={'Nombre de categoria'}
              value={category.name}
              onInputChange={(name, value) => {
                categoryChange(name, value);
              }}
            />
          </Col>
          <Col xs='12'>
            <Input
              type={'text'}
              error={formErrors['slug']}
              label={'Slug'}
              name={'slug'}
              placeholder={'Category Titulo'}
              value={category.slug}
              onInputChange={(name, value) => {
                categoryChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'textarea'}
              error={formErrors['description']}
              label={'Description'}
              name={'description'}
              placeholder={'Descripcion de Categoria'}
              value={category.description}
              onInputChange={(name, value) => {
                categoryChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <SelectOption
              error={formErrors['products']}
              label={'Selecciona Producto'}
              multi={true}
              defaultValue={category.products}
              options={products}
              handleSelectChange={value => {
                categoryChange('products', value);
              }}
            />
          </Col>
          <Col xs='12' md='12' className='mt-3 mb-2'>
            <Switch
              style={{ width: 100 }}
              tooltip={category.isActive}
              tooltipContent={`Al deshabilitar ${category.name} también se deshabilitarán todos los productos ${category.name}.`}
              id={`enable-category-${category._id}`}
              name={'isActive'}
              label={'Activar?'}
              checked={category.isActive}
              toggleCheckboxChange={value =>
                activateCategory(category._id, value)
              }
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button
            type='submit'
            text='Guardar'
            className='mb-3 mb-md-0 mr-0 mr-md-3'
          />
          <Button
            variant='danger'
            text='Borrar'
            onClick={() => deleteCategory(category._id)}
          />
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
