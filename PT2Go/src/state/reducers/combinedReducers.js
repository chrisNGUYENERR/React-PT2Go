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
          exercises:[],
          currentHEP: []
        }
    case "UPDATE_STORE_HEP":
        console.log(action.payload.HEP,'actionpayload')
        return {
          ...state,
          ...{exercises: [...state.exercises, action.payload.HEP]},
          currentHEP: action.payload.HEP
        };
    case "UPDATE_CURRENT_HEP":
        return {
          ...state,
          currentHEP: action.payload.currentHEP

        }
    default:
        return state;
  }
};

export default combinedReducers;