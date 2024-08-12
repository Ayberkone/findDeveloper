import { createStore, combineReducers, Store } from 'redux'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import auth, { AuthState } from './reducers/auth/reducer'
import data, { JobsState } from './reducers/jobs/reducer'

export interface AppState {
  auth: AuthState,
  data: JobsState
}

const rootReducer = combineReducers({
  auth,
  data
})

const store: Store<AppState> = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
