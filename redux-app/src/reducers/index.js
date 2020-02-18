import {LOADING, DATES, ERROR} from '../actions/index';

export const initialState={
    date: null,
    isLoading:false,
    error: ''
};
export const dateReducer = (state = initialState, action) =>{
    console.log('state', state);
    console.log('action', action)
    switch (action.type) {
        case LOADING:
            return{
                ...state,
                isLoading: true,
                error: ''
            }        
        case DATES:
            return{
                ...state,
                isLoading:false,
                date:action.payload
            }        
        case ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload
            }
        
        default: 
        return state;
    }
};