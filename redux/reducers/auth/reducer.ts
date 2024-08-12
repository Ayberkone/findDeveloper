import { REDUX_AUTH_TYPES } from './action'

export interface UserState {
  id: number
  name: string
  title: string
  email: string
  avatarURL?: string
}

export interface AuthState {
  isLogout: boolean
  user: UserState | null
}

const initialAuthState: AuthState = {
  isLogout: false,
  user: null
}

export default function reducer(state = initialAuthState, action) {
  switch (action.type) {
    case REDUX_AUTH_TYPES.USER:
      return {
        ...state,
        user: action.payload
      }
    case REDUX_AUTH_TYPES.IS_LOGOUT:
      return {
        ...state,
        isLogout: action.payload
      }
    default:
      return state
  }
}
