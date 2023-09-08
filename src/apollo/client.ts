import { ApolloClient, InMemoryCache } from '@apollo/client'


export const healthClient = new ApolloClient({
    uri: 'https://api.thegraph.com/index-node/graphql',
    cache: new InMemoryCache()
})

export const blockClient = new ApolloClient({
    uri: 'https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/blocks',
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
    uri: 'https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/analytics',
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
    uri: 'https://telos.subgraph.swapsicle.io/subgraphs/name/cryptoalgebra/farms',
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