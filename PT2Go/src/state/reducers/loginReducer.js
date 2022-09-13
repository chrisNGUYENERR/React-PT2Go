const initialState = { 
    firstname: "", 
    lastname: "", 
    email: "",
    isLoggedIn:false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_LOGIN":
        console.log(action.payload,"inside reducer")
        return {
          ...state,
          firstname:action.payload.user.firstname,
          lastname:action.payload.user.lastname,
          email:action.payload.user.email,
          isLoggedIn:action.payload.isLoggedIn
        };
    default:
        return state;
  }
};

export default loginReducer;