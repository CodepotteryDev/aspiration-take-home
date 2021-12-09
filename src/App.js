import {ApolloClient, ApolloProvider, defaultDataIdFromObject, InMemoryCache} from '@apollo/client';

import TopicList from './components/features/TopicList/TopicList';
import {Toaster} from "react-hot-toast";

import {DEFAULT_TOAST_DURATION, GIT_HUB_TOKEN_DOCS, GITH_GRAPHQL_API_URL} from './constants';

import './App.css';

const token = process.env.REACT_APP_GITH_TOKEN || '';

const App = () => {
    const cache = new InMemoryCache({
        dataIdFromObject: (object) => {
            switch (object.__typename) {
                case 'Topic':
                    return `${object.__typename}.${object.id}.${object.name}`;
                default:
                    return defaultDataIdFromObject(object)
            }
        }
    });
    const client = new ApolloClient({
        uri: GITH_GRAPHQL_API_URL,
        headers: {
            authorization: `Bearer ${token}`,
        },
        cache,
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
