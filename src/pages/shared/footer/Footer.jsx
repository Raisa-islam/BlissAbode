import React from 'react';
import logoi from '../../../assets/rsz_1logo-removebg-preview.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content max-w-full">
      <aside>
        <img src={logoi} className='w-21 h-20' alt="" />
        <p>Bliss Abode Industries Ltd.<br />Providing reliable home since 2010</p>
      </aside>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join w-fit">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item max-w-40 md:max-w-64" />
            <button className="btn btn-primary join-item bg-blue-500 border-0">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;