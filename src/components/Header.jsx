import React from "react";
import { images } from "../constants";

const Header = () => {
  return <section>
     <header className="container mx-auto px-5 flex justify-between py-4">
      <div>
       <img src={images.Logo} alt="logo" /> 
      </div>
      <div className="flex gap-x-9">
       <ul className="flex gap-x-5">
         <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Articles</a>
          </li>
          <li>
            <a href="/">Pages</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Faq</a>
          </li>
        </ul>
        <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold">Sign in</button>
      </div>
    </header>
  </section>
};

export default Header;