/*
By now you've learned how to dispatch actions to the Redux store, 
but so far these actions have not contained any information other than a type. 
You can also send specific data along with your actions. 
In fact, this is very common because actions usually originate from some user interaction and tend to carry some data with them. 
The Redux store often needs to know about this data.
*/

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());