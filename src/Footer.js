import "./App.css";
import React from "react";

function Footer() {
  return (
    <div class="my-footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/Sapphire59"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deborah Chacko
        </a>{" "}
        is open-sourced on{" "}
        <a
          href="https://github.com/Sapphire59/first-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github{" "}
        </a>
        and is hosted on{" "}
        <a
          href="https://deborah-react-weather-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </p>
    </div>
  );
}

export default Footer;
