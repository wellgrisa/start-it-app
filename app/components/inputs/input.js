import React from 'react';

export default React.createClass({

  propTypes: {
    field         : React.PropTypes.string,
    type          : React.PropTypes.string,
    label         : React.PropTypes.string,
    col           : React.PropTypes.string,
    errorMessage  : React.PropTypes.string
  },

  getInitialState () {
    return {
      text: this.props.value
    }
  },

  getText () {
    return this.getValue();
  },

  getValue () {
    const el = this.refs[this.props.field].getDOMNode();

    return el.value;
  },

  onTextChange () {
    const text = this.refs[this.props.field].getDOMNode().value;

    this.setState({ text: text });

    if(this.props.onChange){
      this.props.onChange(text);
    }
  },

  // onKeyPress (e) {
  //   if (!this.props.onKeyPress) return;

  //   this.props.onKeyPress(e);
  // },

  renderErrorMessage () {
    if (!this.props.errorMessage) return;

    return (
      <div className="error-message">
        {this.props.errorMessage}
      </div>
    )
  },

  render () {
    return (
      <div className={`input-field col ${this.props.col}`}>
        <input
          ref={this.props.field}
          name={this.props.field}
          placeholder={this.props.placeholder}
          type={ this.props.type }
          step={ this.props.step }
          min={ this.props.min }
          className="validate"
          value={this.state.text}
          onChange={this.onTextChange}/>
        <label className={ this.props.labelActiveClass }> { this.props.label }</label>
        {this.renderErrorMessage()}
      </div>
    );
  }

});
