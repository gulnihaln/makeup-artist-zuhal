import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdAlternateEmail, MdPhoneIphone } from "react-icons/md";
// import "./styles/TopNavStyle.css";
export default function TopNav() {
  return (
    <section className="top-nav-container">
      <article className="top-nav">
        <MdPhoneIphone className="icon" />
        <p>Phone Number</p>
        <MdAlternateEmail className="icon" />
        <p>Email</p>
      </article>
      <article className="top-nav">
        <a href="">
          <BsFacebook className="social-icon" />
        </a>
        <a href="">
          <BsInstagram className="social-icon" />
        </a>
        <a href="">
          <BsTwitter className="social-icon" />
        </a>
      </article>
    </section>
  );
}
