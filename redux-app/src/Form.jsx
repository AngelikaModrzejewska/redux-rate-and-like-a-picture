import bemCssModules from 'bem-css-modules';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRate, editRate } from './actions/appActions';
import { default as FormStyles } from './Form.module.scss';

const style = bemCssModules(FormStyles);

const Form = ({
  author = '',
  callback,
  comment = '',
  id,
  rate = 0,
}) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const dispatch = useDispatch();

  const handleChangeAuthor = event =>
    setAuthorInput(event.target.value);

  const handleChangeRate = event =>
    setRateInput(event.target.value);

  const handleCommentChange = event =>
    setCommentInput(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    const rateObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };

    id
      ? dispatch(editRate(rateObject))
      : dispatch(addRate(rateObject));

    if (id) {
      callback();
    }
  }

  return (
    <form 
      className={style()}
      onSubmit={handleOnSubmit}>
      <div className={style('comm-elem')}>
        <label className={style('label')}>
          Your name:
          <input
            className={style('input')}
            maxLength="20"
            onChange={handleChangeAuthor}
            type="text"
            value={authorInput}
          />
        </label>
      </div>
      <div className={style('comm-elem')}>
        <label className={style('label')}>
          Your Rate:
          <input
            className={`${style('input')} ${style('rate')}`}
            onChange={handleChangeRate}
            type="number"
            value={rateInput}
          />
        </label>
      </div>
      <div className={style('comm-elem')}>
        <label className={style('label')}>
          Comment:
          <input
            className={style('input')}
            maxLength="20"
            onChange={handleCommentChange}
            type="text"
            value={commentInput}
          />
        </label>
      </div>
      <button 
        className={style('button')}
        type="submit">
        {id ? 'Edit rate' : 'Add rate'}
      </button>
    </form>
  );
};

export default Form;