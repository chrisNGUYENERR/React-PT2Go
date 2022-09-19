import initialState from "../initialState";

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN":
        return {
          ...state,
          firstname:action.payload.user.firstname,
          lastname:action.payload.user.lastname,
          email:action.payload.user.email,
          isLoggedIn:action.payload.isLoggedIn
        };
    case "RESET_STATE": //clear redux state
        console.log(action.payload,"inside reducer")
        return {
          ...state, 
          firstname: "", 
          lastname: "", 
          email: "",
          isLoggedIn:false
        }
    default:
        return state;
  }
};

export default loginReducer;