import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'
import ListPage from '/Users/anthony/Desktop/Manifest/App6/comps/ListPage.js'

// __SIMPLE_API_ENDPOINT__ looks like: 'https://api.graph.cool/simple/v1/__SERVICE_ID__'
const httpLink = new HttpLink({ uri: '' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default class Profile extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ListPage/>
      </ApolloProvider>
      // <View>

      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
