import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ClassContainer from './ClassView/ClassContainer.jsx';
import HomeContainer from './HomeView/HomeContainer.jsx';

class Main extends Component {

  handleWhichView() {
    if (this.props.goHome) {
      return <HomeContainer />;
    }
    return <ClassContainer />;
  }

  render() {
    return <div>{ this.handleWhichView() }</div>;
  }
}

const mapStateToProps = (state) => (
  { goHome: state.goHome }
);

Main.propTypes = {
  goHome: PropTypes.bool,
};

export default connect(
  mapStateToProps
)(Main);
