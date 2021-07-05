import actions from '../actions';
import types from '../types';

const INITIAL_STATE = {
  my_token: '',
};
const homereducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOGGEDIN:
      const data = action.payload;
      console.log(data, 'token at homereducer');

      return {
        my_token: data,
      };

    case types.MYID:
      const newid = action.payload;
      console.log(newid, 'data at reducer');
      // let myarray =blankArray
      // console.log(myarray,"data in myarray reducer")
      return {
        ...state,
        newid: newid,
        //   ...state,blankArray
      };

    default:
      return state;
  }
};

export default homereducers;
