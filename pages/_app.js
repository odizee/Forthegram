import Page from "../components/Page";
import { Provider } from "react-redux";
import store from '../store/index';
import './GlobalStyle.scss'

function MyApp({ Component, pageProps, apollo }) {
  return (
      <Provider store={store}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </Provider>
      
    
    )
}

MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};
  if(Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default MyApp
