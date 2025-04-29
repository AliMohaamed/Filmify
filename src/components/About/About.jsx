import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
  render() {
    // You can set isDarkMode to true for dark theme or false for light theme
    const isDarkMode = true; // Change this to toggle between themes
    
    return (
      <section className={`about-section py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">About CinemaWorld</h2>
              <div className="title-underline"></div>
            </div>
          </div>
          
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Cinema Experience" 
                  className="img-fluid rounded shadow-lg"
                />
                <div className="experience-badge">
                  <span className="years">10+</span>
                  <span className="text">Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">Your Ultimate Movie Destination</h3>
              <p className="lead mb-4">Founded in 2013, CinemaWorld has been at the forefront of bringing the magic of cinema to movie enthusiasts around the globe.</p>
              <p className="mb-4">Our platform offers comprehensive information about the latest releases, timeless classics, and everything in between. We're passionate about cinema and committed to enhancing your movie-watching experience.</p>
              
              <div className="row mt-5">
                <div className="col-md-6 mb-4">
                  <div className="feature-card">
                    <i className="fas fa-film feature-icon"></i>
                    <h5>Extensive Library</h5>
                    <p>Access to information about 50,000+ movies and TV shows from around the world.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="feature-card">
                    <i className="fas fa-star feature-icon"></i>
                    <h5>Expert Reviews</h5>
                    <p>Honest and insightful reviews from our team of dedicated film critics.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="feature-card">
                    <i className="fas fa-ticket-alt feature-icon"></i>
                    <h5>Ticket Booking</h5>
                    <p>Seamless ticket booking experience for theaters near you.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="feature-card">
                    <i className="fas fa-users feature-icon"></i>
                    <h5>Community</h5>
                    <p>Join a thriving community of movie lovers to discuss and share recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-12">
              <div className="mission-vision-section p-5 rounded">
                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0">
                    <h4><i className="fas fa-bullseye me-2"></i> Our Mission</h4>
                    <p>To connect people with the films they'll love by providing the most comprehensive and accurate movie information, while fostering a global community of film enthusiasts.</p>
                  </div>
                  <div className="col-md-6">
                    <h4><i className="fas fa-eye me-2"></i> Our Vision</h4>
                    <p>To be the world's most trusted and beloved platform for movie discovery, where every cinema lover finds their perfect next watch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-5 pt-5">
            <div className="col-12 text-center mb-5">
              <h3>Meet Our Team</h3>
              <p className="lead">The passionate individuals behind CinemaWorld</p>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-member">
                <div className="member-img">
                  <img src="https://media.licdn.com/dms/image/v2/D4D03AQEAsgIB_qu-4A/profile-displayphoto-shrink_800_800/B4DZYVM9NMGkAc-/0/1744112440712?e=1751500800&v=beta&t=puVA1MxyX8O4NXemTym33Z3EJ9ECwGIbVoBTUaLZ2bg" alt="Team Member" className="img-fluid rounded-circle" />
                </div>
                <div className="member-info text-center">
                  <h5>Ali Mohamed</h5>
                  <p className="text-danger">Founder & CEO</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-member">
                <div className="member-img">
                  <img src="https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" className="img-fluid rounded-circle" />
                </div>
                <div className="member-info text-center">
                  <h5>Omar Khaled</h5>
                  <p className="text-danger">Head of Content</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-member">
                <div className="member-img">
                  <img src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Team Member" className="img-fluid rounded-circle" />
                </div>
                <div className="member-info text-center">
                  <h5>Ahmed Kassim</h5>
                  <p className="text-danger">Lead Developer</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="team-member">
                <div className="member-img">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" className="img-fluid rounded-circle" />
                </div>
                <div className="member-info text-center">
                  <h5>Ali Fathy</h5>
                  <p className="text-danger">Film Critic</p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}