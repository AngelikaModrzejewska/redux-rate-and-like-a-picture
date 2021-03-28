import { ADD } from '../actions/appActions';

export const validateAuthorMiddleware = ({ dispatch }) => next => (action) => {
  if (action.type === ADD && !action.payload.author.length) {
    alert('You have to put your name!');
    return;
  }
  next(action);
};