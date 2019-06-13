import axios from 'axios';

// let initialState = {};

// ************************************ ACTION TYPES ************************************
const FETCH_ALL_CAMPUS= "FETCH_CAMPUS";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";

// ************************************ ACTION CREATORS ************************************
const fetchAllCampus = (campus) => {
    return {
        type: FETCH_ALL_CAMPUS,
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
    // return axios
    //     // instead of writing the backend path, our proxy takes care of that for us 
    //     // in ./package.json in the last line 
    //     .get("/api/campuses")
    //     .then(response => response.data)
    //     .then(data => dispatch(fetchAllCampus(data)))
    //     .catch(err => console.log(err));

    return dispatch(fetchAllCampus([{
        id: 1,
        name: "Hunter College",
        address: "695 Park Ave, New York, NY 10065"
    },{
        id: 2,
        name: "Parsons School of Design",
        address: "66 5th Ave, New York, NY 10011"
    }]));
}

export const removeCampusThunk = () => (dispatch) => {
    return dispatch(removeCampus());
}

// ************************************ REDUCER ************************************
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CAMPUS:
            return action.payload;
        case REMOVE_CAMPUS:
            return {};
        default:
            return state;
    }
}

