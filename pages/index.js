import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

// import "./index.css";
import "./style.scss";

const Index = props => (
  <Layout>
    {/* <h1 className="title_txt">Batman TV Shows</h1> */}
    <Link href="/about" as={`/about`}>
      <h1 className="sub_title_color">Fatcat Lottery</h1>
    </Link>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // console.log(res);
  const data = await res.json();
  // console.log(data);

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;