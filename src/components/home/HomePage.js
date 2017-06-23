import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Task Book</h1>
        <p>the best way manage your tasks.</p>
        <Link to="/tasks" className="btn btn-primary btn-lg">Go to Tasks</Link>
      </div>
    );
  }
}

export default HomePage;