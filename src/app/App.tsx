import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AuthProvider } from "app/contexts";
import { Pages } from "./pages";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Pages />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
