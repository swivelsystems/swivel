import React from 'react';
import actions from '../../actions/index.js';
import { connect } from 'react-redux';

class OneAssignment extends React.Component {
  // when a single student is clicked
  // get the current student and display their info
  render() {
    return (
      <div className="row">
        <button
          type="button"
          className="btn btn-secondary back"
          onClick={ () => this.props.handleBackButton() }
        >
          Back
        </button>
        {this.props.currentAssignment.name}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { currentAssignment: state.currentAssignment }
);

// go back to all students when back is pressed
const mapDispatchToProps = (dispatch) => (
  {
    handleBackButton: () => {
      dispatch(actions.switchTabs('Assignments'));
    },
  }
);

OneAssignment.propTypes = {
  currentAssignment: React.PropTypes.object,
  handleBackButton: React.PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneAssignment);
