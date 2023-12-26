const LOGIN = "auth/LOGIN";

export const logIn = () => ({
  type: LOGIN,
});

const initialState = {
  isAuthorized: false,
};

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthorized: true,
      };
    default:
      return state;
  }
};

export default authReducer;
