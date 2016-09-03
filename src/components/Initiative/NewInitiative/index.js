import React, { PropTypes, Component } from 'react';
import { createInitiative } from '~actions/initiative';
import { connect } from 'react-redux';

const title = 'Criar Iniciativa';

class NewInitiative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(createInitiative({ name: this.state.name }));
  }

  render() {
    this.context.setTitle(title);

    return (
      <div>
        <h1>{title}</h1>
        <form
          method="post"
          onSubmit={this.handleSubmit}
        >
          <input
            id="initiative-name"
            type="text"
            placeholder="Nome"
            onChange={this.handleNameChange}
            autoFocus
          />
          <button
            className="btn btn-success"
            type="submit"
          >
            {title}
          </button>
        </form>
      </div>
    );
  }
}

NewInitiative.contextTypes = {
  setTitle: PropTypes.func.isRequired,
};

NewInitiative.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(NewInitiative);
