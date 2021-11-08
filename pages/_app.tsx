import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import '../styles/app.scss';
import {wrapper} from "../redux/store";
import {setNotifications, setUser, userSlice} from "../redux/user/slice";
import {useDispatch, useSelector} from "react-redux";
import {selectUserState} from "../redux/user/user.selector";
import {getCookie, UserApi} from "../services/api/UserApi";
import {getCategories} from "../services/api/CategoryApi";
import {DirectoryApi} from "../services/api/DirectoryApi";
import {setDirectories} from "../redux/directory/slice";
import {AlertContext, AlertContextProps} from '../hooks/useAlert';
import {Slide, Snackbar} from "@material-ui/core";

import MuiAlert, {Color} from '@material-ui/lab/Alert';

function MyApp({Component, pageProps}) {
    const dispatch = useDispatch();
    const user = useSelector(selectUserState)

    React.useEffect(() => {
        if (window?.location.search.includes('token')) {
            const splitToken = window?.location.search.split('=');
            const token = splitToken[splitToken.length - 1];
            window.document.cookie = `auth_token=${token.replace('%7C', '|')}`;
            window.localStorage.setItem('token', token.replace('%7C', '|'))
            UserApi.getMe().then(responseUser => {
                dispatch(setUser(responseUser))
            });
        }

        if (!user && localStorage.getItem('token')) {
            UserApi.getMe().then(responseUser => {
                dispatch(setUser(responseUser))
            });
        }


        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    const [alertInfo, setAlertInfo] = React.useState<AlertContextProps['alertInfo']>({
        text: '',
        status: 'info',
        opened: false,
    });

    const openAlert = (text: React.ReactNode, status: Color = 'info'): void => {
        setAlertInfo({
            text,
            status,
            opened: true,
        });
    };

    const closeAlert = (): void => {
        setAlertInfo((prev) => ({
            ...prev,
            opened: false,
        }));
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AlertContext.Provider value={{alertInfo, openAlert, closeAlert}}>
                    <Component {...pageProps} />
                </AlertContext.Provider>

                <Snackbar
                    TransitionComponent={Slide}
                    key={Slide.name}
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                    open={alertInfo.opened}
                    autoHideDuration={4500}
                    onClose={closeAlert}
                >
                    <MuiAlert severity={alertInfo.status}>{alertInfo.text}</MuiAlert>
                </Snackbar>

            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({Component, ctx}) => {
    const data = await DirectoryApi.get({categories: true, themes: true})
    store.dispatch(setDirectories(data));

    // @ts-ignore
    const token = ctx?.req?.cookies?.auth_token

    if (token) {
       try {
           const user = await UserApi.getMe(token);
           store.dispatch(setUser(user));
           store.dispatch(setNotifications(await UserApi.getNotifications(token)));
       } catch (e) {
           console.log(e);
       }
    }

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
