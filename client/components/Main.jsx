import React from 'react';
import { connect } from 'react-redux';
import ClassContainer from './ClassView/ClassContainer.jsx';
import HomeContainer from './HomeView/HomeContainer.jsx';

class Main extends React.Component {

  handleWhichView() {
    if (this.props.goHome) {
      return <HomeContainer />;
    }
    return <ClassContainer />;
  }

  render() {
    return this.handleWhichView();
  }
}

Main.propTypes = {
  goHome: React.PropTypes.bool,
};

const mapStateToProps = (state) => (
  { goHome: state.goHome }
);

export default connect(
  mapStateToProps
)(Main);
