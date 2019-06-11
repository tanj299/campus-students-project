import axios from 'axios'; 

<<<<<<< HEAD
let initialState = {}  ;

=======
>>>>>>> store
// ************************************ ACTION TYPES ************************************
const FETCH_STUDENT = "FETCH_STUDENT";
const REMOVE_STUDENT = 'REMOVE_STUDENT';

// ************************************ ACTION CREATORS ************************************
const fetchStudent = (student) => {
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
<<<<<<< HEAD
        .get("http://localhost:5000/api/students")  
        .then(response => response.data)
        .then(data => dispatch(data[0]))
        .catch(err => console.log(err));
} 

export default (state = initialState, action) => {
=======
        .get("http://localhost:5000/api/students") //  
        .then(response => response.data)
        .then(data => dispatch(fetchStudent(data[0])))
        .catch(err => console.log(err));
} 

export default (state, action) => {
>>>>>>> store
    switch (action.type) {
        case FETCH_STUDENT: 
            return action.payload; 
    }
} 
