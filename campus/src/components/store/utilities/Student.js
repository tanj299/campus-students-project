import axios from 'axios'; 

let initialState = {}  ;

// ************************************ ACTION TYPES ************************************
const FETCH_STUDENT = "FETCH_STUDENT";
const REMOVE_STUDENT = 'REMOVE_STUDENT';

// ************************************ ACTION CREATORS ************************************
// the student parameter is passed as an argument from the axios call, data => dispatch(fetchStudent(data[0]))
// we need to setup a proxy in our package.JSON in our front end in order to imitate the fact that we're making this requst from the a separate server 
// with a proxy, it is as if the front-end and back-end is running on the same server 
const fetchAllStudents = (student) => {
    return {
        type: FETCH_STUDENT,
        payload: student
    }
}

const removeStudent = () => {
    return {
        type: REMOVE_STUDENT,
    }
}

// ************************************ THUNK CREATORS ************************************
export const fetchStudentThunk = (id) => (dispatch) => {
    return axios 
        // instead of writing the backend path, our proxy takes care of that for us 
        // in ./package.json in the last line 
        .get("/api/students") //  
        .then(response => response.data)
        .then(data => dispatch(fetchAllStudents(data)))
        .catch(err => console.log(err));
} 

// ************************************ STORE ************************************
export default (state=[], action) => {
    switch (action.type) {
        case FETCH_STUDENT: 
            return action.payload; 
        default:
            return state; 
    }
} 
