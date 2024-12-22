

import React from "react";
import { useLocation } from "react-router-dom";

export default function Banner() {
  const location = useLocation();

  const pageTitles = {
    "/": "Home",
    "/about": "About Us",
    "/crime-reports": "Crime Reports",
    "/crime-responses": "Crime Responses",
    "/contact-us": "Contact Us",
    "/login": "Login",
    "/register": "Register",
  };

  const currentTitle = pageTitles[location.pathname] || "Crime Portal";

  return (
    <div className="bg-teal-900 h-[20vh] flex justify-center items-center sticky top-[64px] z-40">
      <p className="text-4xl font-bold text-white">{currentTitle}</p>
    </div>
  );
}
