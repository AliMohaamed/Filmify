import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer-section bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">CinemaWorld</h5>
              <p className="mb-3">
                Your ultimate destination for the latest movies, reviews, and
                cinema news. Experience the magic of movies with us!
              </p>
              <div className="social-icons">
                <a href="#" className="me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="me-3">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            <div className="col-md-2 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Explore</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    Movies
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    TV Shows
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    Upcoming
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    Trailers
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    Top Rated
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Info</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    Terms of Service
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="footer-link">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5 className="text-uppercase mb-4">Newsletter</h5>
              <p className="mb-3">
                Subscribe to our newsletter for exclusive content and updates!
              </p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  aria-label="Your email"
                />
                <button className="btn btn-danger" type="button">
                  Subscribe
                </button>
              </div>
              <p className="small">
                By subscribing, you agree to our Privacy Policy
              </p>
            </div>
          </div>

          <hr className="my-4 bg-secondary" />
        </div>
      </footer>
    </>
  );
}
