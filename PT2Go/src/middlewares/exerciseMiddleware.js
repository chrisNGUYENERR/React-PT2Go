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
                    return data;
                case "DELETE_HEP":
                    console.log(payload.HEP,"inside MW")
                    const resp = await fetch('http://localhost:1337/api/deleteExercise',{
                        method: 'POST',
                        headers : {
                            'Content-Type':'application/json'
                        },
                        body: JSON.stringify({
                            email:payload.emailState,
                            exercisesArray:payload.HEP
                        })
                    })
                    const deletedData = await resp.json()
                    console.log(deletedData,"inside deleteHEP MW")
                    return deletedData;
                default:
                    next(action)
                    break;
            }
            
        }
    }
}