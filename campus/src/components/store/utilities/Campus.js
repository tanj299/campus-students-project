import axios from 'axios';

let initialState = {};

// ************************************ ACTION TYPES ************************************
const FETCH_CAMPUS= "FETCH_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ************************************ ACTION CREATORS ************************************
const fetchAllCampus = (campus) => {
    return {
        type: FETCH_CAMPUS,
        payload: campus
    }
}

const removeCampus = () => {
    return {
        type: REMOVE_CAMPUS,
    }
}

// ************************************ THUNK CREATORS ************************************
export const fetchAllCampusThunk = () => (dispatch) => {
    return axios
        // instead of writing the backend path, our proxy takes care of that for us 
        // in ./package.json in the last line 
        .get("/api/campus")
        .then(response => response.data)
        .then(data => dispatch(fetchAllCampus(data)))
        .catch(err => console.log(err));
}

export const removeCampusThunk = () => (dispatch) => {
    return dispatch(removeCampus());
}

// ************************************ REDUCER  ************************************
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CAMPUS:
            return action.payload;
        case REMOVE_CAMPUS:
            return {};
        default:
            return state;
    }
}

