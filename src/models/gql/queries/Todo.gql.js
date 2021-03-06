import gql from 'graphql-tag';

// Get todos w/ filtering and sorting
export const GET_TODOS = gql`
  query ($filters: TodoFiltersInput, $orderBy: Ordering) {
    getTodoList(filters: $filters, orderBy: $orderBy) {
      id
      title
      type
      createdAt
      isDone
    }
  }
`;

// Get todos by todo id
export const GET_TODO_BY_ID = gql`
  query getTodoById($id: ID!) {
    getTodoById(id: $id) {
      id
      createdAt
      type
      isDone
      text
      title
    }
  }
`;

// Get todos by todo types enum
export const GET_TODO_TYPES = gql`
  query getTodoTypes {
    __type(name: "TodoTypes") {
      name
      enumValues {
        name
      }
    }
  }
`;
