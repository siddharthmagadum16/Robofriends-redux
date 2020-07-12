import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constant.js';

export const setSearchField =(text)=>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

// 2) Here the payload changes to whatever we type(got to recucers.js for 3))

export const requestRobots=()=> (dispatch)=>{
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(  data => dispatch({  type:   REQUEST_ROBOTS_SUCCESS, payload: data   }))
    .catch( err=> dispatch  ({  type:   REQUEST_ROBOTS_FAILED,  payload: err    }))
}