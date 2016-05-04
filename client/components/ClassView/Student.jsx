import React from 'react';
import actions from '../../actions/index.js';
import { connect } from 'react-redux';

class StudentTab extends React.Component {
  render() {
    return (
      <div className="row">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={ () => this.props.handleBackButton() }
        >
          Back
        </button>
        {this.props.currentStudent.name}
      </div>
    );
  }
}

StudentTab.propTypes = {
  currentStudent: React.PropTypes.object,
  handleBackButton: React.PropTypes.func,
};

const mapStateToProps = (state) => (
  {
    currentStudent: state.currentStudent,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    handleBackButton: () => {
      dispatch(actions.switchTabs('Students'));
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTab);

