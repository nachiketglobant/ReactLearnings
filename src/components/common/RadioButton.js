  import React, {PropTypes} from 'react';

class RadioButton extends React.Component {
  render() {
    return (
     <div className="field">
        <div>
          <input type="radio" name={this.props.item.description} value={this.props.item.id} checked={this.props.item.checked} onChange={this.props.handleChange}/>
          <label>{this.props.item.description}</label>
        </div>
      </div>
    );
  }
}

RadioButton.propTypes = {
  item: PropTypes.object.isRequired, 
  handleChange: PropTypes.func.isRequired
};

export default RadioButton;
