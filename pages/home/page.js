// pages/[lang]/index.js
import content from "../../public/locale/en/index.json";
console.log(content);
function HomePage() {
  console.log(content);
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

export default HomePage;
