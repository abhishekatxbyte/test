// pages/about.js

import content from "../../public/locale/en/about.json";

function AboutPage() {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.sunTitle}</p>
      <button>{content.button}</button>
      <div>
        <p>{content.nested.nested1}</p>
        <p>{content.nested.nested2.nested01}</p>
      </div>
    </div>
  );
}

export default AboutPage;
