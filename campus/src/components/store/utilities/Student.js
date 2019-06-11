import axios from 'axios'; 

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
        .get() //  
        .then(response => response.data)
        .then()
        .catch(err => console.log(err));
} 

export default (state, action) => {
    switch (action.type) {
        case FETCH_STUDENT: 
            return action.payload; 
    }
} 
