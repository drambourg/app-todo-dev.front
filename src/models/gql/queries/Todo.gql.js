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