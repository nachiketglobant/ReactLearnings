import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import RadioButton from '../common/RadioButton';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.makeCheckBoxes = this.makeCheckBoxes.bind(this);
  }

  makeCheckBoxes() {
    return this.props.categories.map(category => {
      return <RadioButton item={category} handleChange={this.props.onCategoryChange} key={category.id}/>
    })
  }

  render() {
    const boxes = this.makeCheckBoxes();
    return (
      <div>
        <form>
          <TextInput
            name="description"
            label="Description"
            value={this.props.task.description}
            onChange={this.props.onChange}/>

          {boxes}

          <TextInput
            name="length"
            label="Length"
            value={this.props.task.length}
            onChange={this.props.onChange}/>

          <TextInput
            name="assignedto"
            label="Assigned To"
            value={this.props.task.assignedto}
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            value={this.props.saving ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

TaskForm.propTypes = {
  task: React.PropTypes.object.isRequired,
  categories: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onCategoryChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default TaskForm;
