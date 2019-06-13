import axios from 'axios'; 

// let initialState = {}  ;

// ************************************ ACTION TYPES ************************************
const FETCH_STUDENT = "FETCH_STUDENT"; 
const FETCH_ALL_STUDENT = "FETCH_ALL_STUDENT";
const ADD_NEW_STUDENT = "ADD_NEW STUDENT";
const REMOVE_STUDENT = 'REMOVE_STUDENT';

// ************************************ ACTION CREATORS ************************************
// the student parameter is passed as an argument from the axios call, data => dispatch(fetchStudent(data[0]))
// we need to setup a proxy in our package.json in our front end in order to imitate the fact that we're making this requst from the a separate server 
// with a proxy, it is as if the front-end and back-end is running on the same server 

const fetchStudent = (student) => {
    return {
        type: FETCH_STUDENT,
        payload: student 
    }
}

const fetchAllStudents = (student) => {
    return {
        type: FETCH_ALL_STUDENT,
        payload: student
    }
}

const addNewStudent = (newStudent) => {
    return {
        type: ADD_NEW_STUDENT,
        payload: newStudent
    }
}

const removeStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        payload: id
    }
}

// ************************************ THUNK CREATORS ************************************

export const fetchStudentThunk = (id) => (dispatch) => {
    return axios
        .get("/api/students/" + id)
        .then(response => response.data)
        // .then(data => console.log(data))
        .then(data => dispatch(fetchStudent(data)))
        .catch(err => console.log(err));
}

export const fetchAllStudentsThunk = () => (dispatch) => {
    return axios 
        // instead of writing the backend path, our proxy takes care of that for us 
        // in ./package.json in the last line 
        .get("/api/students")  
        .then(response => response.data)
        .then(data => dispatch(fetchAllStudents(data)))
        .catch(err => console.log(err));
} 

// The above is equivalent to the bottom broken down
// Thunk will keep invoking functions until an object is returned 
// function fetchAllStudentsThunk() {
//     return function (dispatch) {
//         return axios
//             .get("localhost:3000/api/students")
//             .then(res => res.data)
//             .then(students => dispatch(fetchAllStudents(students)))
//             .catch(err => console.log(err))
//     }
// }

export const addNewStudentThunk = (student) => (dispatch) => {
    return axios 
        // axios.post because we are ADDING a new student
        // remember, axios can GET, POST, PUT, DELETE
        .post("/api/students", student)
        .then(response => response.data)
        .then(data => dispatch(addNewStudent()))
        .catch(err => console.log(err));
}

export const removeStudentThunk = (id) => (dispatch) => {
    return axios 
        .get("/api/students")
        .then(response => response.data)
        .then(data => dispatch(removeStudent(data)))
        .catch(err => console.log(err));
}

// ************************************ REDUCER  ************************************
// my state is an object now , NOT just an array
// you always get the current state using the spread operator to make a copy (it's similar to .slice())
export default (state = {students:[], singleStudent: {}}, action) => {
    switch (action.type) {
        case FETCH_STUDENT: 
            return {
                ...state, singleStudent: action.payload
            }
        case FETCH_ALL_STUDENT: 
            // action.payload is returned, which is the data in 
            // dispatch(fetchAllStudents(data)) in THUNK CREATORS
            // the chain goes: AllStudents --> mapFunctions --> takes the key, which is the ACTION CREATORS and passed in as a prop and calls fetchStudentThunk
            // --> fetchStudentThunk is invoked --> grabs data and uses key, fetchAllStudents and passes the object, which is data, into fetchAllStudents
            // --> fetchAllStudents is invoked --> passed student to reducer, reducer matches up action type with action creator, and return appropriate data
            // --> back to THUNK CREATORS and new data, which is the payload, is dispatched in dispatch()
            return {
                ...state, students: action.payload 
            }
        case ADD_NEW_STUDENT: 
            // spreads out the old array of values and include this new single student we just added 
            return {
                ...state, students: [...state.students, action.payload]
            } 
        case REMOVE_STUDENT:
            // returns all students except that one student, whether it's by id or whatnot, you can use splice 
            // filter out that one student and return new array WIHOUT that one student 
            const newState = this.state.slice();
            // const filteredArray = newState.filter(id => id !== id);
            // newState = newState.splice()
            return ; 
        default:
            return state; 
    }
} 
