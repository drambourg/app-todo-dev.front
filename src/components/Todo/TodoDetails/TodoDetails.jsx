import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_TODO_BY_ID } from '../../../models/gql/queries/Todo.gql';
import { timestampToDisplay } from '../../../helpers/timeConverter.helper';
import { Redirect } from 'react-router';

// Todo details information
const TodoDetails = ({ id }) => {
  const { loading, error, data } = useQuery(GET_TODO_BY_ID, {
    variables: { id },
  });

  if (loading) return 'Loading...';
  if (error) return <Redirect to='/todos' />;

  return (
    <>
      {data?.getTodoById && (
        <table id='todo-detail'>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{data.getTodoById.id || 'undefined'}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>
                {(data.getTodoById.createdAt &&
                  timestampToDisplay(data.getTodoById.createdAt)) ||
                  'No Date'}
              </td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{(data.getTodoById.isDone && 'Done') || 'To Do'}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{data.getTodoById.type || 'Undefined'}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{data.getTodoById.title || 'Undefined'}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{data.getTodoById.text || 'Undefined'}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};
export default TodoDetails;
