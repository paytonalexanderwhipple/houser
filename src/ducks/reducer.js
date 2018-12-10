const initialState = {
    property_name: '',
    address: '',
    city: '', 
    state_name: '',
    zip: '',
    monthly_mortgage: '',
    desired_rent: '',
    img: '',
}
// *** ACTION TYPES *** //

const HANDLE_INPUT = 'HANDLE_INPUT';
const CLEAR_STATE = 'CLEAR_STATE';

// *** REDUCER *** //

function reducer(state = initialState, action) {
    switch(action.type) {
        case HANDLE_INPUT:
            return {...state, [action.payload.name]: action.payload.value}
        case CLEAR_STATE:
            return {...action.payload}
        default: 
            return {...state}
    }
}

// *** ACTION CREATORS *** //

export function handleInput(event) {
    return {
        type: HANDLE_INPUT,
        payload: event.target,
    }
}

export function clearState() {
    return {
        type: CLEAR_STATE,
        payload: initialState,
    }
}

export default reducer