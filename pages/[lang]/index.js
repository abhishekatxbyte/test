function Home({ content }) {
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

export async function getStaticProps({ params }) {
  const lang = params.lang || "en"; // Default to English
  const content = require(`../../public/locale/${lang}/index.json`);
  return {
    props: {
      content,
    },
  };
}

export async function getStaticPaths() {
  // Define the possible language values here (e.g., 'en', 'fr', 'de')
  const languageValues = ["en", "de"];

  const paths = languageValues.map((lang) => ({
    params: { lang },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Home;
