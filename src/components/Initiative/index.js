import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class Initiative extends Component {

  handleClick = () => {
    console.log('initiative clicked');
  }

  render() {
    const { initiative } = this.props;
    this.context.setTitle(initiative.name);

    return (
      <div>
        <h1>{initiative.name}</h1>
        <p onClick={this.handleClick}>{initiative.id}</p>
      </div>
    );
  }
}

Initiative.contextTypes = {
  setTitle: PropTypes.func.isRequired,
};

Initiative.propTypes = {
  initiative: PropTypes.object,
};

export default connect()(Initiative);
