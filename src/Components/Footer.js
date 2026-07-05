import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center p-3 mt-3">
        <div>© 2026 Publicly-NewsApp | Made Using React By Sourav Pal</div>
        <pre className="mt-2">
          <a
            href="https://github.com/souravpal11"
            className="text-reset text-decoration-none fs-6"
          >
            <i className="fa-brands fa-github m-2"></i>souravpal11
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/sourav-pal-4195aa380/"
            className="text-reset text-decoration-none fs-6"
          >
            <i className="fa-brands fa-linkedin m-2"></i>SOURAV PAL
          </a>{" "}
          |{" "}
          <a href="https://souravsir2008@gmail.com" className="text-reset text-decoration-none fs-6" >
            <i className="fa-solid fa-envelope me-2"></i>
             Email
          </a>
        </pre>
      </footer>
    </>
  );
};

export default Footer;
