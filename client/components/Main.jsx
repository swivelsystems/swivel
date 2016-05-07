import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ClassContainer from './ClassView/ClassContainer.jsx';
import HomeContainer from './HomeView/HomeContainer.jsx';
import SideBar from './SideBar.jsx';

class Main extends Component {

  handleWhichView() {
    if (this.props.goHome) {
      return <HomeContainer />;
    }
    return <ClassContainer />;
  }

  render() {
    return (
      <div className="container-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <SideBar />
            </div>
            <div className="col-md-9 main-wrapper">
              { this.handleWhichView() }
            </div>
          </div>
        </div>
      </div>
    );
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
