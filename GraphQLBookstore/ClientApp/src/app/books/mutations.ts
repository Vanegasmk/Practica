import gql from 'graphql-tag';

export const CREATE_BOOK = gql`
    mutation($input: BookInput!) {
        createBook(input: $input) {
            id
            name
            description
            price
            authorId
        }
    }
`;

export const UPDATE_BOOK = gql`
    mutation($id: ID!, $input: BookInput!) {
        updateBook(id: $id, input: $input) {
            id
            name
            description
            price
            authorId
        }
    }
`;


export const DELETE_BOOK = gql`
    mutation($id: ID!) {
        deleteBook(id: $id) {
            id
        }
    }
`;