import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import TopicList from './components/features/TopicList/TopicList';
import {Toaster} from "react-hot-toast";

import {DEFAULT_TOAST_DURATION, GIT_HUB_TOKEN_DOCS, GITH_GRAPHQL_API_URL} from './constants';

import './App.css';

const token = process.env.REACT_APP_GITH_TOKEN || '';

const App = () => {
    const client = new ApolloClient({
        uri: GITH_GRAPHQL_API_URL,
        cache: new InMemoryCache(),
        headers: {
            authorization: `Bearer ${token}`,
        },
    });

    return token ? (
        <ApolloProvider client={client}>
            <TopicList/>
            <Toaster position="top-right"
                     duration={DEFAULT_TOAST_DURATION}
                     toastOptions={{className: 'toast-message'}}/>
        </ApolloProvider>
    ) : (
        <p className="git-token-message">Please supply a Git token. <a href={GIT_HUB_TOKEN_DOCS}>HOW TO GENERATE A
            PERSONAL ACCESS TOKEN.</a></p>
    );
};

export default App;
