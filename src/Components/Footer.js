const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-headline">
        <h2>Company</h2>
        <ul>About</ul>
        <ul>Careers</ul>
        <ul>Team</ul>
        <ul>BuzzOne</ul>
        <ul>Hungry Instamart</ul>
      </div>

      <div className="footer-headline">
        <h2>Contact us</h2>
        <ul>Help & Support</ul>
        <ul>Partner with us</ul>
        <ul>Ride with us</ul>

        <div className="legal">
          <div className="footer-headline">
            <h2>Legal</h2>
            <ul>Terms & Conditions</ul>
            <ul>Cookie Policy</ul>
            <ul>Privacy Policy</ul>
          </div>
        </div>
      </div>

      <div className="footer-headline">
        <h2>We deliver to:</h2>
        <ul>Mumbai</ul>
        <ul>Pune</ul>
        <ul>Bangalore</ul>
        <ul>Hyderabad</ul>
        <ul>Delhi</ul>
        <ul>586 cities{">"}</ul>
      </div>
    </div>
  );
};

export default Footer;