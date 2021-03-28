import bemCssModules from 'bem-css-modules';
import { useState } from 'react';
import Form from './Form';
import { default as ListStyles } from './List.module.scss';

const styleList = bemCssModules(ListStyles);

const Element = ({ author, comment, id, rate }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => setIsVisibleForm(prev => !prev);

  const formOrButtonElement = isVisibleForm
    ? (
      <Form
        author={author}
        callback={toggleElements}
        comment={comment}
        id={id}
        rate={rate}
      />
    ) : (
      <p
        className={styleList('pclick')}
        onClick={toggleElements}>
        Edit rate
      </p>
    );

  return (
    <li>
      <p>Name: <span className={styleList('span')}>{author}</span></p>
      <p>Rate: <span className={styleList('span')}>{rate}</span></p>
      <p>Comment: <span className={styleList('span')}>{comment}</span></p>
      {formOrButtonElement}
    </li>
  );
};

export default Element;