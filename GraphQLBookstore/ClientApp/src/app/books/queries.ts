import gql from "graphql-tag";

export const BOOKS_QUERY = gql`
  query {
    books {
      id
      name
      description
      price
      authorId
      author {
        name
      }
    }
  }
`;
