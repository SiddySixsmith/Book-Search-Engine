import { gql } from "@apollo/client";

const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

const SAVE_BOOK = gql`
  mutation saveBook(
    $authors: String!
    $description: String!
    $bookId: ID!
    $image: Image!
    $link: String!
    $title: String!
  ) {
    saveBook(
      authors: $authors
      description: $description
      bookId: $bookIdW
      image: $image
      link: $link
      title: $title
    ) {
      _id
      name
      skills
    }
  }
`;

const REMOVE_BOOK = gql`
  mutation removeBook($title: String!) {
    removeBook(title: $title) {
      _id
      title
      description
    }
  }
`;

export default { USER_LOGIN, ADD_USER, SAVE_BOOK, REMOVE_BOOK };
