import footerBg from "../assets/images/footer-bg 1 1 (1).png"
const Footer = () => {
    return (
        <footer style={{backgroundImage:`url(${footerBg})`}} className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </nav>
        <nav>
          <h6 className="footer-title">ORAL HEALTH</h6>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
         
        </nav>
        <nav>
          <h6 className="footer-title">OUR ADDRESS</h6>
          <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">Khulna,BD</a>
        
            
          </div>
        </nav>
      </footer>
    );
};

export default Footer;