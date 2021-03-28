import { ADD, EDIT } from '../actions/appActions';

export const appReducer = (state = [{ author: 'Ada', comment: 'cool', rate: 7, id: 12345 }], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case EDIT:
      return state.map(currentStateElement => {
        if (currentStateElement.id !== action.payload.id) {
          return currentStateElement;
        }
        const { author, comment, rate } = action.payload;
        return ({
          author,
          comment,
          id: currentStateElement.id,
          rate,
        });
      });

    default:
      console.warn(`There is no action like this: ${action.type}`);
      return state;
  }
}