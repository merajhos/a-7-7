import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div>
        <footer className="footer md:footer-horizontal bg-neutral text-neutral-content p-10 flex flex-wrap md:grid md:grid-cols-5 ">
          <nav >
            <h6 className="text-md font-bold "> CS — Ticket System</h6>
            <p className=" text-gray-400">
              When picking a cricket  player a T20 all-rounder  is
              often the  best choice  due to their versatility. They
              can score quick  runs, hit big sixes, and  take
              crucial wickets.
            </p>
          </nav>
          <nav>
            <h6 className="text-md font-bold "> Company </h6>
            <a className="link link-hover text-gray-400"> about us</a>
            <a className="link link-hover text-gray-400"> our mission</a>
            <a className="link link-hover text-gray-400"> contact saled </a>
          </nav>
          <nav>
            <h6 className="text-md font-bold ">Service</h6>
            <a className="link link-hover text-gray-400"> Products & Services</a>
            <a className="link link-hover text-gray-400"> Customer Stories</a>
            <a className="link link-hover text-gray-400"> Download Apps</a>
          </nav>
          <nav>
            <h6 className="text-md font-bold ">Information</h6>
            <a className="link link-hover text-gray-400"> Privacy Policy</a>
            <a className="link link-hover text-gray-400"> Terms & Conditions</a>
            <a className="link link-hover text-gray-400"> Join Us</a>
          </nav>
          <nav>
            <h6 className="text-md font-bold ">Social Links</h6>
            <a className="link link-hover text-gray-400"> @CS — Twitter</a>
            <a className="link link-hover text-gray-400"> @CS — Instagram</a>
            <a className="link link-hover text-gray-400"> @CS — FaceBook</a>
            <a className="link link-hover text-gray-400"> ticketsystem12@gmail.com</a>
          </nav>
        </footer>
      </div>
      <p className="bg-black  text-center py-5 border-y border-gray-600 text-gray-400">© 2025 CS — Ticket System. All rights reserved.</p>
    </div>
  );
};

export default Footer;
