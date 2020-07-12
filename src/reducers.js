import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constant.js';

const initialStateSearch = {
    SearchField:''
}
// console.log(SearchField);
export const searchRobots = (state=initialStateSearch,action={})=>{
    switch(action.type){
        case (CHANGE_SEARCH_FIELD):
            return Object.assign({},state,{ SearchField:action.payload })
        default:
            return state;
    }
}
// 3) Before we type anything, we keep the action={ initialState} as default
// now think it like a switch button
// whenever the CHANGE_SEARCH_FIELD is assigned its payload to some other text,
// we assign that text to SearchField wihich is present on line 3 above (now goto app.js for 4))

const initialStateRobots={
    isPending: false,
    Robots   : []   ,
    error    : ''
}

export const requestRobots= (state=initialStateRobots,action={})=>{
    switch(action.type){
        case (REQUEST_ROBOTS_PENDING):  return Object.assign({} ,state,{ isPending: true});
        case (REQUEST_ROBOTS_SUCCESS): return Object.assign({}  ,state,{ Robots:action.payload, isPending: false});
        case (REQUEST_ROBOTS_FAILED)  : return Object.assign({} ,state,{ error :action.payload, isPending: false});
        default: return state;
    }
}