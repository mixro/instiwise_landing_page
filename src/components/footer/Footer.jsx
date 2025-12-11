import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <div className="logo-icon">
                <img src='/src/assets/instiwise-logo.png' alt='SVC' />
            </div>
            <span>INSTiWISE</span>
          </div>
          <div className="footer-links">
            <div className='footer-link'>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Security</a>
            </div>
            <div className='footer-link'>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
            <div className='footer-link'>
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} InstiWise. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer