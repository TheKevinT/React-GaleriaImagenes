import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-center mt-2 bg-dark text-white">
        Copyright &copy; {new Date().getFullYear()}- Kevin Tipantiza
      </footer>
    </>
  );
};

export default Footer;
