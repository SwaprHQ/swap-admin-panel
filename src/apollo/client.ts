import { ApolloClient, InMemoryCache } from '@apollo/client'


export const healthClient = new ApolloClient({
    uri: 'https://api.thegraph.com/index-node/graphql',
    cache: new InMemoryCache()
})

export const blockClient = new ApolloClient({
    uri: process.env.REACT_APP_SUBGRAPH_BLOCKS,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const client = new ApolloClient({
    uri: process.env.REACT_APP_SUBGRAPH_INFO,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})

export const farmingClient = new ApolloClient({
    uri: process.env.REACT_APP_SUBGRAPH_FARMS,
    cache: new InMemoryCache(),
    queryDeduplication: true,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache'
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all'
        }
    }
})