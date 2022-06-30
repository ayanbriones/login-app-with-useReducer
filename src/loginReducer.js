export function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.field]: action.value,
      }
    }
    case 'login': {
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
      }
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      }
    }
    case 'error': {
      return {
        ...state,
        error: 'Incorrect username or password',
        isLoading: false,
        username: '',
        password: '',
      }
    }
    default:
      return state
  }
}
