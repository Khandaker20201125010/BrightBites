import footerBg from "../assets/images/footer-bg.png";

const Footer = () => {
  return (
    <footer
      className="bg-base-300 text-base-content p-10"
      style={{ backgroundImage: `url(${footerBg})`, backgroundSize: "cover" }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <nav>
          <h6 className="footer-title">SERVICES</h6>
          <a className="link link-hover block">Emergency Checkup</a>
          <a className="link link-hover block">Monthly Checkup</a>
          <a className="link link-hover block">Weekly Checkup</a>
          <a className="link link-hover block">Deep Checkup</a>
        </nav>

        <nav>
          <h6 className="footer-title">ORAL HEALTH</h6>
          <a className="link link-hover block">Fluoride Treatment</a>
          <a className="link link-hover block">Cavity Filling</a>
          <a className="link link-hover block">Teeth Whitening</a>
        </nav>

        <nav>
          <h6 className="footer-title">OUR ADDRESS</h6>
          <a className="link link-hover block">New York - 101010 Hudson</a>
        </nav>
      </div>

      <div className="text-center mt-10">
        <p>Copyright © 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
