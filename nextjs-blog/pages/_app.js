// 'pages/_app.js'
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  // default expot of _app.js is a top level 
  // React component that wraps all the pages in the app