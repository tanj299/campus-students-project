import axios from 'axios';

// let initialState = {};

// ************************************ ACTION TYPES ************************************
const FETCH_CAMPUS = "FETCH_CAMPUS"
const FETCH_ALL_CAMPUS = "FETCH_ALL_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ************************************ ACTION CREATORS ************************************
const fetchCampus = (campus) => {
    return {
        type: FETCH_CAMPUS,
        payload: campus 
    }
}

const fetchAllCampus = (campus) => {
    return {
        type: FETCH_ALL_CAMPUS,
        payload: campus
    }
}

const removeCampus = (campus) => {
    return {
        type: REMOVE_CAMPUS,
        payload: campus
    }
}

// ************************************ THUNK CREATORS ************************************
export const fetchCampusThunk = (id) => (dispatch) => {
    return axios
        .get("/api/campuses/" + id)
        .then(response => response.data)
        .then(data => dispatch(fetchCampus(data)))
        .catch(err => console.log(err));
} 

export const fetchAllCampusThunk = () => (dispatch) => {
    return axios
        // instead of writing the backend path, our proxy takes care of that for us 
        // in ./package.json in the last line 
        .get("/api/campuses")
        .then(response => response.data)
        .then(data => dispatch(fetchAllCampus(data)))
        .catch(err => console.log(err));
}

export const removeCampusThunk = () => (dispatch) => {
    return dispatch(removeCampus());
}

// ************************************ REDUCER ************************************
export default (state = {campus: [], singleCampus: {}}, action) => {
    switch (action.type) {
        case FETCH_CAMPUS: 
            return {
                ...state, singleCampus: action.payload
            } 
        case FETCH_ALL_CAMPUS:
            return {
                ...state, campus: action.payload
            }
        case ADD_CAMPUS: 
            return {};
        case REMOVE_CAMPUS:
            return {};
        default:
            return state;
    }
}

