import React from 'react';
import ReactSelect from 'react-select';

export default React.createClass({

  propTypes: {
    field       : React.PropTypes.string,
    multi       : React.PropTypes.bool,
    onChange    : React.PropTypes.func,
    options     : React.PropTypes.array,
    placeholder : React.PropTypes.string,
    searchable  : React.PropTypes.bool,
    additionalClass: React.PropTypes.string,
    value       : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object,
      React.PropTypes.array
    ]),
  },

  getDefaultProps () {
    return {
      searchable: true,
      multi     : false,
      value     : null,
      additionalClass: ''
    }
  },

  getInitialState () {
    return {
      value: this.props.value,
      valid: ''
    }
  },

  getText () {
    return this.refs[this.props.field].state.placeholder;
  },

  getValue () {
    const value = this.refs[this.props.field].state.value;

    if (this.props.multi) {
      const arr = value.split(',').map(item => {
        return parseInt(item);
      });

      const items =  this.props.options.filter(item => {
        return arr.indexOf(item.id) !== -1;
      });

      return items;
    }

    return value;
  },

  onChange (value, item) {
    this.setState({
      value: item,
      valid: 'valid'
    });

    if (!this.props.onChange) return;

    this.props.onChange(value, item[0]);
  },

  renderErrorMessage () {
    if (!this.props.errorMessage) return;

    return (
      <div className="error-message">
        {this.props.errorMessage}
      </div>
    )
  },

  render () {
    const options = this.props.options ? this.props.options.map(option => {
      return {
        value: option.id,
        label: option.text
      }
    }) : [];

    let value = this.state.value;

    if (this.props.multi) {
      value = this.state.value.map(item => {
        return item.label
      });
    }

    return (
      <div className={`input-field col ${this.props.col}`}>
        <ReactSelect
          className={`react-select-component ${this.state.valid} ${this.props.additionalClass}`}
          id={this.props.field}
          ref={this.props.field}
          name={this.props.field}
          value={value}
          options={this.props.options}
          clearable={this.props.clearable}
          searchable={this.props.searchable}
          asyncOptions={this.props.asyncOptions}
          onChange={this.onChange}
          multi={this.props.multi}
          placeholder={this.props.placeholder}
        />
        <label className="active">{ this.props.label }</label>
        { this.renderErrorMessage() }
      </div>
    );
  }

});
