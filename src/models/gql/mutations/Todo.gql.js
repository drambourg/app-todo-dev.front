import gql from "graphql-tag";

// Update status todo
export const UPDATE_TODO_STATUS = gql`
  mutation updateTodoStatusById($id: ID!, $isDone: Boolean!) {
    updateTodoStatusById(id: $id, isDone: $isDone) {
      id
      title
      text
      isDone
    }
  }
`;
