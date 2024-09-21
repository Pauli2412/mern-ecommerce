/**
 *
 * Checkbox
 *
 */

import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
    this.props.handleChangeSubmit(event.target.name, event.target.value);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Newest First"
                checked={this.state.size === "Lo mas nuevo primero"}
                onChange={this.handleChange}
              />
              Más reciente primero
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Price High to Low"
                checked={this.state.size === "Precio de mayor a menor"}
                onChange={this.handleChange}
              />
              Precio de alto a bajo
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Price Low to High"
                checked={this.state.size === "Precio de Menor a Mayor"}
                onChange={this.handleChange}
              />
              Precio bajo a alto
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radio;
