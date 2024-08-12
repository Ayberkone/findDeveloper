export const REDUX_AUTH_TYPES = {
  USER: 'USER',
  IS_LOGOUT: 'IS_LOGOUT'
}

export const dispatchLogout = (isLogout: boolean) => (dispatch) => dispatch({
  type: REDUX_AUTH_TYPES.IS_LOGOUT,
  payload: isLogout
})

export const dispatchUser = (user) => (dispatch) => {
  if (user) {
    dispatchLogout(false)
  }
  dispatch({
    type: REDUX_AUTH_TYPES.USER,
    payload: user
  })
}
