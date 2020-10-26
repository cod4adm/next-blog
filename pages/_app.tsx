import '../styles/main.scss';
import {Provider} from 'react-redux';
import {useStore} from '../redux/store';
import {createGlobalStyle, ThemeProvider} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Roboto', sans-serif;
    }
`;

const theme = {
    colors: {
        primary: '#313b3f',
    },
};

export default function MyApp({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}
