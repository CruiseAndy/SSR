import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';

const About = props => {
  return (
    <Layout>
      <p>This is the about page</p>
      <textarea style={{ width: "100%", height: "500px" }}>
        {JSON.stringify(props.preloadData)}
      </textarea>
    </Layout>
  )
}

About.getInitialProps = async content => {
  console.log("--------------------------------------");
  console.log(content);
  const resRlt = await fetch(
    "https://api.sc8game.com/api/community/preload",
    {
      method: "get",
      headers: {
        company: "SUNBET",
        "Accept-Version": "v2",
        locale: "en"
      }
    }
  );

  console.log("--------------------------------------");
  console.log(resRlt);

  const dataRlt = await resRlt.json();

  console.log("--------------------------------------");
  console.log(dataRlt);

  return {
    preloadData: dataRlt.content
  }
}

export default About;