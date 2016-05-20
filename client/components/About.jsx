import React from 'react';
import Nav from './Nav.jsx';

const About = () => (
  <div>
    <Nav page={'view-demo'} />
    <div className="about container">
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
              <h5 className="team-member-info-container-name card-title">Joel Aguero</h5>
              <p className="team-member-card-info">Joel is a front-end engineer with a passion for user-centered design. He enjoys building performant software that delivers exceptional user experiences and solves real needs.</p>
              <a href="https://github.com/joelaguero">Github</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/joelaguero">LinkedIn</a>
            </div>
          </div>
          <div className="team-member col-md-3">
            <div className="team-member-img-container">
              <img className="team-member-img-container-img" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJqAAAAJDgxMTQ0N2NlLWRjNTMtNDJmNy04OWY3LTYzOWVmMzRjZTRjYg.jpg" />
            </div>
            <div className="team-member-info-container">
              <h5 className="team-member-info-container-name card-title">Lizzy Harris</h5>
              <p className="team-member-card-info">Lizzy is a full-stack engineer looking for system design challenges and creative ways to make the front-end do more with less.</p>
              <a href="https://github.com/CodeLizards">Github</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/elizabethbharris">LinkedIn</a>
            </div>
          </div>
          <div className="team-member col-md-3">
            <div className="team-member-img-container">
              <img className="team-member-img-container-img" src="https://avatars2.githubusercontent.com/u/13471760?v=3&s=400" />
            </div>
            <div className="team-member-info-container">
              <h5 className="team-member-info-container-name card-title">Jonathen Chen</h5>
              <p className="team-member-card-info">Jonathen is a full-stack engineer and enjoys architecting complex systems and identifying opportunities for performance optimization. He is from Canada, eh?</p>
              <a href="https://github.com/jonathen09">Github</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/jonathen-chen">LinkedIn</a>
            </div>
          </div>
          <div className="team-member col-md-3">
            <div className="team-member-img-container">
              <img className="team-member-img-container-img" src="http://i.imgur.com/38WUS5z.jpg" />
            </div>
            <div className="team-member-info-container">
              <h5 className="team-member-info-container-name card-title">Kevin Meraz</h5>
              <p className="team-member-card-info">Kevin Meraz is a full-stack engineer. Complex and optimized architectures, coupled with artistic UX/UI’s are his perpetual goal.</p>
              <a href="https://github.com/kmeraz">Github</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/kmeraz">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
);

export default About;
