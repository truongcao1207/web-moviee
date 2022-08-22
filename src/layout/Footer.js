import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="h-0.1 bg-primary m-10" />
      <div className="flex flex-wrap justify-around pb-10 ">
        <a className="text-xl">Questions? Contact us.</a>
        <ul className="grid grid-cols-4 pr-5  hover:cursor-pointer">
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Speed Test</li>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
          <li>Legal Notices</li>
          <li>Account</li>
          <li>Ways to Watch</li>
          <li className="pr-10">Corporate Information</li>
          <li>Only on Netflix</li>
          <li>Media Center</li>
          <li>Terms of Use</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
