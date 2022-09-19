import initialState from "../initialState";

const combinedReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN":
        return {
          ...state,
          firstname:action.payload.user.firstname,
          lastname:action.payload.user.lastname,
          email:action.payload.user.email,
          isLoggedIn:action.payload.isLoggedIn,
          exercises:action.payload.user.exercises
        };
    case "RESET_STATE": //clear redux state
        console.log(action.payload,"inside reducer")
        return {
          ...state, 
          firstname: "", 
          lastname: "", 
          email: "",
          isLoggedIn:false,
          exercises:[]
        }
    case "UPDATE_STORE_HEP":
        console.log(action.payload,'actionpayload')
        return {
          ...state,
          exercises:action.payload.HEP
        };
    default:
        return state;
  }
};

export default combinedReducers;