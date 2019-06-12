 // actions/index.js
// Namespace actions

// import axios from 'axios';

export function fetchHome(){
    return{
        type:"FETCH_HOME",
        payload:{
            firstName:"",
            lastName:" "
        }
    }
}
// export function fetchHome(){
//     return function(dispatch){
//         axios.get("htt://")
//         .then((res)=>{
//             dispatch({
//                 type:"FETCH_HOME",
//                 payload:res.data
//             })
//         })
//     }
// }

export const INCREMENT = 'counter/INCREMENT';

