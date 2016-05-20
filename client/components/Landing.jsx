import React from 'react';
import Nav from './Nav.jsx';

const Landing = () => (
  <div>
     <Nav page={'view-demo'} />
     <div className="intro-header">
         <div className="container">
             <div className="row">
                 <div className="col-lg-12">
                     <div className="intro-message">
                         <h1>Learn Better</h1>
                         <h3>Education Management Software for K-12 Schools</h3>
                         <hr className="intro-divider" />
                         <ul className="list-inline">
                             <li>
                                 <a href="/#/demo" className="btn btn-success btn-lg">Try Demo</a>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
     </div>

     <div className="content-section-a">
         <div className="container">
             <div className="row">
                 <div className="col-lg-5 col-sm-6">
                     <hr className="section-heading-spacer" />
                     <div className="clearfix"></div>
                     <h2 className="section-heading">
                       Comprehensive Metrics:<br />Level Up Learning
                     </h2>
                     <p className="lead">Focus less on number-crunching and focus more on your students. Swivel visualizes multiple dimensions of student engagement and performance, including attendance, participation, and timeliness. We'll crunch the numbers so you <i>don't</i> need to do the math.</p>
                 </div>
                 <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                     <img className="img-responsive landing-page-image" src="http://imgur.com/cBokVKc.png" alt="" />
                 </div>
             </div>
         </div>
     </div>

     <div className="content-section-b">
         <div className="container">
             <div className="row">
                 <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                     <hr className="section-heading-spacer" />
                     <div className="clearfix"></div>
                     <h2 className="section-heading">High Touch, Low Effort</h2>
                     <p className="lead">Communication features like Announcements and real-time chat make it easy to provide just-in-time assistance to your students. Office hours communicate when you'll be accessible, and when you won't be.</p>
                 </div>
                 <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                   <img className="img-responsive landing-page-image" src="http://imgur.com/g3aVSo8.png" alt="" />
                 </div>
             </div>
         </div>
     </div>

     <div className="content-section-a">
         <div className="container">
             <div className="row">
                 <div className="col-lg-5 col-sm-6">
                     <hr className="section-heading-spacer" />
                     <div className="clearfix"></div>
                     <h2 className="section-heading">
                       Know Your Classroom
                     </h2>
                     <p className="lead">Accurately track your student's academic performance and identify at-risk students before it's too late. Swivel makes it easy to understand your classes and students at a glance.</p>
                 </div>
                 <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                     <img className="img-responsive landing-page-image" src="http://imgur.com/87ucR4o.png" alt="" />
                 </div>
             </div>
         </div>
     </div>

     <footer>
         <div className="container">
             <div className="row">
                 <div className="col-lg-12">
                     <ul className="list-inline">
                         <li>
                             <a href="#">Home</a>
                         </li>
                         <li className="footer-menu-divider">&sdot;</li>
                         <li>
                             <a href="#about">About</a>
                         </li>
                         <li className="footer-menu-divider">&sdot;</li>
                         <li>
                             <a href="#services">Services</a>
                         </li>
                         <li className="footer-menu-divider">&sdot;</li>
                         <li>
                             <a href="#contact">Contact</a>
                         </li>
                     </ul>
                     <p className="copyright text-muted small">
                       Copyright &copy; Swivel Systems 2016. All Rights Reserved
                     </p>
                 </div>
             </div>
         </div>
     </footer>
  </div>
);

export default Landing;
