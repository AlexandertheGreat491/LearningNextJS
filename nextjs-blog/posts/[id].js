import Layout from '../../components/layout';
//import { getAllPostIds } from '../../lib/posts';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// allows getting posts by id, title, and date
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  );
}


//export default function Post() {
  //return <Layout>...</Layout>;
//}

// post page now using the getPostData function in getStaticProps to get
// post data & return it as props

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}