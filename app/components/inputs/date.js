import React from 'react';
import Strings from '../../constants/strings';

export default React.createClass({

  propTypes: {
    field         : React.PropTypes.string,
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
  },

  componentDidMount (){
    $(React.findDOMNode(this.refs[this.props.field])).pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 80, // Creates a dropdown of 15 years to control year
      format: Strings.Date.dateFormat,
      max: Date.now,
      ...Strings.Date,
      onSet: function(thingSet) {
        if(thingSet.select){
          this.$node.removeClass('valid');
          this.$node.addClass('valid');
          this.close();
        }
      }
    });
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
          type="date"
          className="datepicker"
          value={this.state.text}/>
        <label className={ this.props.labelActiveClass }>{ this.props.label }</label>
        {this.renderErrorMessage()}
      </div>
    );
  }

});
