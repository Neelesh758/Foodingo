import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-10">
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Foodingo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
