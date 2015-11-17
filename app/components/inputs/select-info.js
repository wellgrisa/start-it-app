import React from 'react';
import Select from './select';
import Input from './input';

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
    info       : React.PropTypes.object
  },

  getDefaultProps () {
    return {
      searchable: true,
      multi     : false,
      value     : null,
      info     : null,
      additionalClass: ''
    }
  },

  getInitialState () {
    return {
      value: this.props.value,
      info: this.props.info.value,
      valid: ''
    }
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
    let nextState = this.state;
    nextState.value = value;
    nextState.valid = 'valid';
    this.setState(nextState);

    if (!this.props.onChange) return;

    this.props.onChange(nextState, this.props.field);
  },

  onInfoChange (value) {
    let nextState = this.state;
    nextState.info = value;
    this.setState(nextState);

    if (!this.props.onChange) return;

    this.props.onChange(nextState, this.props.field);
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
    const shadow = this.state.value === 'sim' ? 'shadow' : '';
    return (
      <div className='select-info'>
        <div className={`col ${this.props.col} ${shadow} ${this.props.additionalClass}`}>
          <Select
            ref={this.props.field}
            field={this.props.field}
            value={this.state.value}
            clearable={this.props.clearable}
            searchable={this.props.searchable}
            options={this.props.options}
            label={this.props.label}
            col='s12'
            onChange={this.onChange}/>
          <Info
            ref={this.props.info.field}
            field={this.props.info.field}
            value={this.state.info}
            label={this.props.info.label}
            col='s12'
            placeholder={this.props.info.placeholder}
            show={this.state.value === 'sim'}
            onChange={this.onInfoChange}/>
        </div>
      </div>
    );
  }

});

let Info = React.createClass({

  propTypes: {
    field       : React.PropTypes.string,
    placeholder : React.PropTypes.string,
    col         : React.PropTypes.string,
    value       : React.PropTypes.string,
    label       : React.PropTypes.string
  },

  getDefaultProps () {
    return {
      value: null
    }
  },

  getInitialState () {
    return {
      value: this.props.value,
      valid: ''
    }
  },

  render () {
    if(!this.props.show){
      return <div></div>;
    }
    return (
      <div className="info">
        <Input
          ref={this.props.field}
          field={this.props.field}
          value={this.state.value}
          type="text"
          label={this.props.label}
          col={this.props.col}
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}/>
      </div>
    );
  }

});
