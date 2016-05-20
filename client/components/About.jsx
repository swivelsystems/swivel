import React from 'react';
import Nav from './Nav.jsx';

const About = () => (
  <div>
    <Nav page={'view-demo'} />
    <div className="about container">
      <div className="row about-us-header">
        <h2>About Us</h2>
        <hr />
        </div>
        <div>
      </div>
      <div className="row">
        <div className="team-header">
          <h2>Meet the Team</h2>
          <hr />
        </div>
        <div className="row col-md-12">
          <div className="team-member col-md-3">
            <div className="team-member-img-container">
              <img className="team-member-img-container-img" className="team-member-img-container-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAg8AAAAJDQyMDI3ODlkLWQ1YzktNGVmZS1hMzA2LWM0Njk3MTE5YjIzNA.jpg" />
            </div>
            <div className="team-member-info-container">
              <h5 className="card-title">Joel Aguero</h5>
              <p className="team-member-card-info">Joel is a software engineer. i think. he moonlights as tuna fey. until he cops out. </p>
              <a href="https://github.com/joelaguero">github</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/joelaguero">linkedIn</a>
            </div>
          </div>
          <div className="team-member col-md-3">
            <div className="team-member-img-container">
              <img className="team-member-img-container-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJqAAAAJDgxMTQ0N2NlLWRjNTMtNDJmNy04OWY3LTYzOWVmMzRjZTRjYg.jpg" />
            </div>
            <div className="team-member-info-container">
              <h5 className="card-title">Lizzy Harris</h5>
              <p className="team-member-card-info">Joel is a software engineer. i think. he moonlights as tuna fey. until he cops out. </p>
              <a href="https://github.com/CodeLizards">github</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/elizabethbharris">linkedIn</a>
            </div>
          </div>
          <div className="team-member col-md-3">
            <div className="team-member-img-container">
              <img className="team-member-img-container-img" src="https://avatars2.githubusercontent.com/u/13471760?v=3&s=400" />
            </div>
            <div className="team-member-info-container">
              <h5 className="card-title">Jonathen Chen</h5>
              <p className="team-member-card-info">Joel is a software engineer. i think. he moonlights as tuna fey. until he cops out. </p>
              <a href="https://github.com/jonathen09">github</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/jonathen-chen">linkedIn</a>
            </div>
          </div>
          <div className="team-member col-md-3">
            <div className="team-member-img-container">
              <img className="team-member-img-container-img" src="http://i.imgur.com/nPK1qrh.jpg" />
            </div>
            <div className="team-member-info-container">
              <h5 className="card-title">Kevin Meraz</h5>
              <p className="team-member-card-info">Joel is a software engineer. i think. he moonlights as tuna fey. until he cops out. </p>
              <a href="https://github.com/kmeraz">github</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/kmeraz">linkedIn</a>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
);

export default About;
