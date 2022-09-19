export const exerciseMiddleware = (store)=>{
    return (next) =>{
        return async(action)=>{
            switch(action.type){
                case "ADD_HEP":
                    const {payload} = action
                    console.log(payload.HEP,"inside MW")
                    const res = await fetch('http://localhost:1337/api/addExercise',{
                        method: 'POST',
                        headers : {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({
                            email:payload.emailState,
                            exercisesArray:payload.HEP
                        })
                    })
                    const data = await res.json()
                    console.log(data,"inside Exercise MW")
                default:
                    next(action)
                    break;
            }
            
        }
    }
}