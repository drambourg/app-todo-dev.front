export const TodoReducer = (state, action) => {
  let filterTypes = [];
  if (!action) return state;

  switch (action?.type) {
    case 'FILTER_ALL_TYPES':
      return {
        ...state,
        filters: {
          ...state.filters,
          types: action.todoTypes || [],
        },
      };

    case 'ADD_FILTER_TYPE':
      filterTypes = (state.filters?.types && state.filters.types) || [];
      return {
        ...state,
        filters: {
          ...state.filters,
          types: !filterTypes.includes(action.todoType)
            ? [...filterTypes, action.todoType]
            : filterTypes,
        },
      };

    case 'REMOVE_FILTER_TYPE':
      filterTypes = (state.filters?.types && state.filters.types) || [];
      return {
        ...state,
        filters: {
          ...state.filters,
          types: filterTypes.filter((type) => type !== action.todoType),
        },
      };

    default:
      return state;
  }
};
