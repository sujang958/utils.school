import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://utils.school/api/graphql"
      : "http://localhost:4009/api/graphql",
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
    },
  },
})

export default client
