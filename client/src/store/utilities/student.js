import axios from 'axios';

//*****************************  ACTION TYPES ****************************
const FETCH_STUDENT = "FETCH_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const SUBMIT_STUDENT = "SUBMIT_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";

//***************************** ACTION CREATORS ****************************
// Reads in the ACTION TYPES and invokes the corresponding functions

// Fetch player object from API 
// @return: the payload which is all the info of the student
const fetchStudent = (student) => {
    return {
        type: FETCH_STUDENT, 
        payload: student
    }
}

const removeStudent = () => {
    return {
        type: REMOVE_STUDENT
    }
}

const submitStudnet = () => {
    return {
        type: SUBMIT_STUDENT
        
    }
}

//***************************** THUNK CREATORS ****************************
export const fetchStudentThunk = (id) => 