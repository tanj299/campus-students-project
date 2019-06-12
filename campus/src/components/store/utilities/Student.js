import axios from 'axios'; 

let initialState = {}  ;

// ************************************ ACTION TYPES ************************************
const FETCH_STUDENT = "FETCH_STUDENT";
const REMOVE_STUDENT = 'REMOVE_STUDENT';

// ************************************ ACTION CREATORS ************************************
// the student parameter is passed as an argument from the axios call, data => dispatch(fetchStudent(data[0]))
// we need to setup a proxy in our package.json in our front end in order to imitate the fact that we're making this requst from the a separate server 
// with a proxy, it is as if the front-end and back-end is running on the same server 

// this sends data from api to reducer 
const fetchAllStudents = (student) => {
    return {
        type: FETCH_STUDENT,
        payload: student
    }
}

const removeStudent = (student) => {
    return {
        type: REMOVE_STUDENT,
        payload: student
    }
}

// ************************************ THUNK CREATORS ************************************
export const fetchStudentThunk = () => (dispatch) => {
    return axios 
        // instead of writing the backend path, our proxy takes care of that for us 
        // in ./package.json in the last line 
        .get("/api/students")  
        .then(response => response.data)
        .then(data => dispatch(fetchAllStudents(data)))
        .catch(err => console.log(err));
} 

export const removeStudentThunk = () => (dispatch) => {
    return axios 
        .get("/api/students")
        .then(response => response.data)
        .then(data => dispatch(removeStudent(data)))
        .catch(err => console.log(err));
}

// ************************************ REDUCER  ************************************
export default (state=[], action) => {
    switch (action.type) {
        case FETCH_STUDENT: 
            // action.payload is returned, which is the data in 
            // dispatch(fetchAllStudents(data)) in THUNK CREATORS
            // the chain goes: AllStudents --> mapFunctions --> takes the key, which is the ACTION CREATORS and passed in as a prop and calls fetchStudentThunk
            // --> fetchStudentThunk is invoked --> grabs data and uses key, fetchAllStudents and passes the object, which is data, into fetchAllStudents
            // --> fetchAllStudents is invoked --> passed student to reducer, reducer matches up action type with action creator, and return appropriate data
            // --> back to THUNK CREATORS and new data, which is the payload, is dispatched in dispatch()
            return action.payload; 
        case REMOVE_STUDENT:
            // returns all students except that one student, whether it's by id or whatnot, you can use splice 
            return action.payload;
        default:
            return state; 
    }
} 

