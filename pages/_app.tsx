import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import '../styles/app.scss';
import {wrapper} from "../redux/store";
import {setUser, userSlice} from "../redux/user/slice";
import {useDispatch, useSelector} from "react-redux";
import {selectUserState} from "../redux/user/user.selector";
import {getCookie, UserApi} from "../services/api/UserApi";
import {getCategories} from "../services/api/CategoryApi";
import {DirectoryApi} from "../services/api/DirectoryApi";
import {setDirectories} from "../redux/directory/slice";
function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUserState)

  React.useEffect(() => {
    if (window?.location.search.includes('token')) {
      const splitToken = window?.location.search.split('=');
      const token = splitToken[splitToken.length - 1];
      window.document.cookie = `auth_token=${token}`;
      window.localStorage.setItem('token', token)
      UserApi.getMe().then(responseUser => {
        dispatch(setUser(responseUser))
      });
    }

    if (localStorage.getItem('token')) {
      UserApi.getMe().then(responseUser => {
        dispatch(setUser(responseUser))
      });
    }


    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({Component, ctx}) => {
  const data = await DirectoryApi.get({ categories: true, themes: true })
  store.dispatch(setDirectories(data));

  return {
    pageProps: {
      // Call page-level getInitialProps
      // DON'T FORGET TO PROVIDE STORE TO PAGE
      ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {}),
      // Some custom thing for all pages
      pathname: ctx.pathname,
    },
  };

});

export default wrapper.withRedux(MyApp);
