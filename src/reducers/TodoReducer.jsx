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

    case 'SET_FILTER_TYPE_BUSINESS':
      return {
        ...state,
        filters: {
          ...state.filters,
          types: ['Marketing', 'Communication'],
        },
      };

    case 'TOGGLE_FILTER_ISDONE':
      return {
        ...state,
        filters: {
          ...(action.isDone && { isDone: action.isDone === 'true' }),
          types: state.filters.types,
        },
      };

    default:
      return state;
  }
};
