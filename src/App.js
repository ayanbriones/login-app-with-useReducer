import { useReducer } from 'react'
import './App.css'
import { login } from './utils'
import { loginReducer } from './loginReducer'

const initialState = {
  error: '',
  isLoading: false,
  isLoggedIn: false,
  username: '',
  password: '',
}

function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState)
  const { isLoading, isLoggedIn, error, username, password } = state

  async function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: 'login' })
    try {
      await login({ username, password })
      dispatch({ type: 'success' })
    } catch (error) {
      dispatch({ type: 'error' })
    }
  }

  return (
    <div className='App'>
      <h1>Login App with Reducer</h1>
      <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h2>Hello {username}</h2>
            <button onClick={() => dispatch({ type: 'logout' })}>
              Log Out
            </button>
          </>
        ) : (
          <form className='form' onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <p>Please Login</p>
            <input
              type='text'
              required
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  field: 'username',
                  value: e.currentTarget.value,
                })
              }
              value={username}
              name='username'
              placeholder='username'
            />
            <input
              type='password'
              required
              name='password'
              value={password}
              onChange={(e) =>
                dispatch({
                  type: 'field',
                  field: 'password',
                  value: e.currentTarget.value,
                })
              }
              placeholder='password'
            />
            <button className='submit' type='submit' disabled={isLoading}>
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default App
