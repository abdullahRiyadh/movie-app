import '../styles/globals.css';
import { MovieProvider } from '../context/MovieContext';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <MovieProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MovieProvider>
  );
}

export default MyApp;
