import {ADD_ARTICLE, FOUND_BAD_WORD} from "../constants/action-types";
//these are action creators
export function addArticle(payload) {
  return {type: ADD_ARTICLE,payload}
};

export function foundBadWord(payload){
  return {type: FOUND_BAD_WORD,payload}
};

export function getData(){
  return function(dispatch){//inserted when using redux-thunk
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({type:"DATA_LOADED",payload: json});
      });
  };
}
